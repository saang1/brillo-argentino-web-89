import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const PoliticaPrivacidad = () => {
  return <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          <p className="text-gray-600 mt-2">Última actualización: Junio 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              En Elite Garage Spa recopilamos la siguiente información:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Información de contacto (nombre, teléfono, email)</li>
              <li>Información del vehículo (marca, modelo, año, patente)</li>
              <li>Historial de servicios realizados</li>
              <li>Preferencias de comunicación</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Brindar nuestros servicios de detailing</li>
              <li>Programar citas y enviar recordatorios</li>
              <li>Mantener un historial de servicios</li>
              <li>Comunicar ofertas y promociones (con su consentimiento)</li>
              <li>Mejorar la calidad de nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad apropiadas para proteger su información personal contra 
              acceso no autorizado, alteración, divulgación o destrucción. Sus datos se almacenan de forma 
              segura y solo el personal autorizado tiene acceso a ellos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Compartir Información</h2>
            <p className="text-gray-700 leading-relaxed">
              No vendemos, comercializamos o transferimos su información personal a terceros, excepto cuando 
              sea necesario para brindar nuestros servicios o cuando sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Sus Derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              De acuerdo con la Ley de Protección de Datos Personales (Ley 25.326), usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos incorrectos o incompletos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 leading-relaxed">
              Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. 
              Puede configurar su navegador para rechazar cookies, aunque esto puede afectar 
              algunas funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cambios en la Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de actualizar esta política de privacidad. Los cambios 
              serán publicados en esta página con la fecha de actualización correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Para ejercer sus derechos o realizar consultas sobre esta política, contáctenos:
            </p>
            <div className="text-gray-700">
              <p>📧 info@elitegaragespa.com</p>
              <p>📱 +54 11 6912-2284</p>
              <p>📍 Luzuriaga 395, Barracas, CABA Buenos Aires</p>
            </div>
          </section>
        </div>
      </div>
    </div>;
};
export default PoliticaPrivacidad;