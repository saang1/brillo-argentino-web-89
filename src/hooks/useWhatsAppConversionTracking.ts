import { useEffect } from "react";
import { reportWhatsAppConversion } from "@/lib/gtag";

const isWhatsAppLink = (href: string) =>
  /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href);

/**
 * Escucha los clics en cualquier enlace de WhatsApp del sitio y los registra como
 * conversión en Google Ads. Al ser delegado cubre también los botones que se
 * agreguen más adelante, sin tener que anotarlos uno por uno.
 *
 * Los botones que abren WhatsApp por JS (el flotante y el formulario de contacto)
 * no pasan por acá: llaman a reportWhatsAppConversion() ellos mismos.
 */
export function useWhatsAppConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link || !isWhatsAppLink(link.href)) return;

      // Si abre en una pestaña nueva la página no se descarga: alcanza con
      // disparar el evento y dejar que el clic siga su curso normal.
      const opensNewTab =
        link.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey;

      if (opensNewTab) {
        reportWhatsAppConversion();
        return;
      }

      // Navegación en la misma pestaña: esperamos a que Google registre el clic
      // antes de irnos, si no la conversión se pierde al descargarse la página.
      const url = link.href;
      event.preventDefault();
      reportWhatsAppConversion(() => {
        window.location.href = url;
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
