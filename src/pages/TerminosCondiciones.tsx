import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const TerminosCondiciones = () => {
  return <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
          <p className="text-gray-600 mt-2">Última actualización: Junio 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y utilizar los servicios de Elite Garaje Spa, usted acepta estar sujeto a estos términos y condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Elite Garaje Spa ofrece servicios profesionales de detailing automotriz, incluyendo:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Limpieza de tapizados de autos e interiores</li>
              <li>Autos inundados</li>
              <li>Pulidos y abrillantados Autos y Motos</li>
              <li>Tratamientos para el cuidado</li>
              <li>Lavados a vapor de motos</li>
              <li>Reparación de tapizados de autos y motos</li>
              <li>Trabajos de pintura para motos</li>
              <li>Limpieza de cascos de motos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Responsabilidades del Cliente</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proporcionar información precisa sobre el vehículo y sus necesidades</li>
              <li>Retirar objetos de valor del vehículo antes del servicio</li>
              <li>Informar sobre daños preexistentes en el vehículo</li>
              <li>Cumplir con los horarios acordados para la entrega y recogida</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed">
              Elite Garaje Spa se compromete a realizar todos los trabajos con el máximo cuidado y profesionalismo. 
              Sin embargo, no nos hacemos responsables por daños preexistentes no declarados o por objetos de valor 
              dejados en el vehículo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Política de Pagos</h2>
            <p className="text-gray-700 leading-relaxed">
              Los precios están sujetos a cambios sin previo aviso. El pago se realiza al momento de la entrega del servicio. 
              Aceptamos efectivo, transferencias bancarias y tarjetas de débito/crédito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Garantía</h2>
            <p className="text-gray-700 leading-relaxed">
              Ofrecemos garantía en nuestros trabajos según el tipo de servicio realizado. Los detalles específicos 
              de la garantía se proporcionarán al momento de la contratación del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para consultas sobre estos términos, puede contactarnos en:
            </p>
            <div className="mt-3 text-gray-700">
              <p>📧 elitegarajespa@gmail.com</p>
              <p>📱 +54 11 6912-2284</p>
              <p>📍 Av. Amancio Alcorta 1887, Barracas, CABA Buenos Aires</p>
            </div>
          </section>
        </div>
      </div>
    </div>;
};
export default TerminosCondiciones;