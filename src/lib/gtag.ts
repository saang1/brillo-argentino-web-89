// Conversión "Clic en WhatsApp" de Google Ads (cuenta 539-594-2488).
// La etiqueta base AW-477784628 se carga desde el <head> en index.html.
const WHATSAPP_CONVERSION_SEND_TO = "AW-477784628/R7jhCN7BrPIcELTU6eMB";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Registra en Google Ads un clic en WhatsApp.
 *
 * Si se pasa `onDone`, se lo llama cuando Google confirma el envío —o a los 800 ms
 * como máximo— para poder recién entonces navegar sin perder la conversión. Sin
 * `onDone` el evento se dispara y listo: sirve para los botones que abren WhatsApp
 * en una pestaña nueva, donde la página no se descarga.
 */
export function reportWhatsAppConversion(onDone?: () => void) {
  if (typeof window.gtag !== "function") {
    onDone?.();
    return;
  }

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    onDone?.();
  };

  window.gtag("event", "conversion", {
    send_to: WHATSAPP_CONVERSION_SEND_TO,
    event_callback: finish,
  });

  // Si gtag.js está bloqueado (adblock) el callback nunca llega: igual seguimos.
  if (onDone) window.setTimeout(finish, 800);
}
