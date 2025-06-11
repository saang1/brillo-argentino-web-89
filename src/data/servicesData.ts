
export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  features: string[];
  process: string[];
  benefits: string[];
  duration: string;
  warranty: string;
  images: string[];
  faqs: { question: string; answer: string; }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'tratamientos-sonax',
    title: 'Tratamientos Sonax Certificado',
    shortDescription: 'Productos profesionales Sonax para el cuidado integral de tu vehículo con certificación oficial.',
    fullDescription: 'Nuestros tratamientos Sonax certificados representan la excelencia en el cuidado automotriz. Utilizamos productos de máxima calidad respaldados por la prestigiosa marca alemana Sonax, líder mundial en productos de detailing profesional.',
    price: 'Consultar',
    features: ['Productos certificados Sonax', 'Tratamientos profesionales', 'Garantía de calidad', 'Resultados duraderos'],
    process: [
      'Evaluación inicial del vehículo',
      'Lavado preliminar con productos Sonax',
      'Aplicación de tratamientos específicos',
      'Protección y acabado final',
      'Control de calidad y entrega'
    ],
    benefits: [
      'Protección duradera de la pintura',
      'Realza el brillo natural',
      'Resistencia a elementos externos',
      'Mantiene el valor del vehículo'
    ],
    duration: '3-5 horas',
    warranty: '6 meses',
    images: ['/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png'],
    faqs: [
      {
        question: '¿Qué incluye el tratamiento Sonax?',
        answer: 'Incluye lavado, descontaminación, pulido si es necesario, y aplicación de protección Sonax certificada.'
      },
      {
        question: '¿Cuánto dura la protección?',
        answer: 'La protección Sonax tiene una duración de 6 a 12 meses dependiendo del uso del vehículo.'
      }
    ]
  },
  {
    id: 'limpieza-interior',
    title: 'Limpieza de Interior',
    shortDescription: 'Limpieza profunda y detallada del interior de tu vehículo, tapizados, cueros y plásticos.',
    fullDescription: 'Transformamos el interior de tu vehículo con una limpieza profunda y especializada. Nuestro proceso incluye el tratamiento específico para cada tipo de material: tela, cuero, vinilo y plásticos.',
    price: 'Desde $12.000',
    features: ['Aspirado completo', 'Limpieza de tapizados', 'Acondicionamiento de cueros', 'Desinfección'],
    process: [
      'Aspirado completo de alfombras y asientos',
      'Limpieza de tapizados con productos específicos',
      'Tratamiento y acondicionamiento de cueros',
      'Limpieza de plásticos y viniles',
      'Desinfección y aromatización'
    ],
    benefits: [
      'Eliminación de manchas y olores',
      'Protección de materiales',
      'Ambiente saludable',
      'Mayor confort de manejo'
    ],
    duration: '2-3 horas',
    warranty: '1 mes',
    images: ['/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png'],
    faqs: [
      {
        question: '¿Se pueden eliminar todas las manchas?',
        answer: 'La mayoría de las manchas se pueden eliminar. Evaluamos cada caso para garantizar el mejor resultado posible.'
      },
      {
        question: '¿Incluye la limpieza del baúl?',
        answer: 'Sí, incluye aspirado y limpieza completa del baúl y compartimentos.'
      }
    ]
  },
  {
    id: 'service-pintura',
    title: 'Service de Pintura/Pulidos',
    shortDescription: 'Corrección de pintura profesional para eliminar rayones y devolver el brillo original.',
    fullDescription: 'Nuestro servicio de corrección de pintura utiliza técnicas profesionales y productos de última generación para eliminar defectos, rayones y opacidad, devolviendo a tu vehículo su brillo original de fábrica.',
    price: 'Desde $25.000',
    features: ['Pulido profesional', 'Corrección de defectos', 'Eliminación de rayones', 'Restauración del brillo'],
    process: [
      'Evaluación del estado de la pintura',
      'Lavado y descontaminación',
      'Lijado húmedo si es necesario',
      'Pulido con máquinas profesionales',
      'Aplicación de protección'
    ],
    benefits: [
      'Eliminación de rayones y marcas',
      'Recuperación del brillo original',
      'Protección contra futuros daños',
      'Aumento del valor del vehículo'
    ],
    duration: '4-8 horas',
    warranty: '3 meses',
    images: ['/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png'],
    faqs: [
      {
        question: '¿Se pueden eliminar todos los rayones?',
        answer: 'La mayoría de los rayones superficiales y medios se pueden eliminar. Los rayones profundos pueden minimizarse significativamente.'
      },
      {
        question: '¿Afecta la garantía del vehículo?',
        answer: 'No, nuestros procesos profesionales no afectan la garantía del fabricante.'
      }
    ]
  },
  {
    id: 'restauracion-opticas',
    title: 'Restauración de Ópticas',
    shortDescription: 'Recuperá la transparencia y claridad de las ópticas de tu auto para mayor seguridad.',
    fullDescription: 'Restauramos la transparencia y claridad de los faros delanteros y traseros de tu vehículo. Con el tiempo, las ópticas se opacan debido a la exposición UV y elementos ambientales, reduciendo la visibilidad y seguridad.',
    price: 'Desde $8.000',
    features: ['Lijado progresivo', 'Pulido especializado', 'Protección UV', 'Mayor visibilidad'],
    process: [
      'Desmontaje de ópticas si es necesario',
      'Lijado húmedo con diferentes granos',
      'Pulido con compuestos específicos',
      'Aplicación de barniz protector UV',
      'Montaje y verificación final'
    ],
    benefits: [
      'Mayor seguridad de manejo',
      'Mejor iluminación nocturna',
      'Apariencia renovada',
      'Protección UV duradera'
    ],
    duration: '2-3 horas',
    warranty: '6 meses',
    images: ['/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png'],
    faqs: [
      {
        question: '¿Mejora realmente la iluminación?',
        answer: 'Sí, al restaurar la transparencia, la luz pasa sin obstáculos mejorando significativamente la iluminación.'
      },
      {
        question: '¿Se vuelven a opacar?',
        answer: 'Con nuestro tratamiento UV, las ópticas mantienen su transparencia por mucho más tiempo.'
      }
    ]
  },
  {
    id: 'sacabollos',
    title: 'Sacabollos',
    shortDescription: 'Reparación de abolladuras sin pintura, manteniendo el acabado original de fábrica.',
    fullDescription: 'Utilizamos la técnica PDR (Paintless Dent Repair) para reparar abolladuras sin dañar la pintura original. Este método profesional mantiene el valor y acabado de fábrica de tu vehículo.',
    price: 'Desde $5.000',
    features: ['Sin pintura', 'Técnica PDR', 'Mantiene valor original', 'Reparación invisible'],
    process: [
      'Evaluación del daño',
      'Acceso al área afectada',
      'Aplicación de técnica PDR',
      'Masajeado desde el interior',
      'Verificación y acabado'
    ],
    benefits: [
      'Mantiene pintura original',
      'Reparación rápida',
      'No afecta garantía',
      'Costo menor que pintura tradicional'
    ],
    duration: '1-3 horas',
    warranty: 'Permanente',
    images: ['/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png'],
    faqs: [
      {
        question: '¿Qué tipos de abolladuras se pueden reparar?',
        answer: 'La mayoría de abolladuras por granizo, portazos y golpes menores se pueden reparar con PDR.'
      },
      {
        question: '¿Queda completamente invisible?',
        answer: 'Sí, cuando se aplica correctamente la técnica PDR, la reparación es completamente invisible.'
      }
    ]
  },
  {
    id: 'ploteos',
    title: 'Ploteos',
    shortDescription: 'Personalización y protección de tu vehículo con ploteos de alta calidad y diseños únicos.',
    fullDescription: 'Ofrecemos servicios completos de ploteo vehicular, desde protección transparente hasta diseños personalizados. Utilizamos materiales premium que protegen la pintura original mientras dan un look único a tu vehículo.',
    price: 'Consultar',
    features: ['Diseños personalizados', 'Materiales premium', 'Protección de pintura', 'Acabado profesional'],
    process: [
      'Diseño y aprobación',
      'Preparación del vehículo',
      'Corte de materiales',
      'Aplicación profesional',
      'Acabado y control de calidad'
    ],
    benefits: [
      'Protección de pintura original',
      'Personalización única',
      'Reversible',
      'Resistencia a rayos UV'
    ],
    duration: '1-3 días',
    warranty: '2 años',
    images: ['/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png'],
    faqs: [
      {
        question: '¿Se puede remover sin dañar la pintura?',
        answer: 'Sí, los ploteos de calidad se pueden remover sin dañar la pintura original cuando se hace profesionalmente.'
      },
      {
        question: '¿Incluyen diseño personalizado?',
        answer: 'Sí, ofrecemos servicio completo de diseño personalizado según tus preferencias.'
      }
    ]
  }
];

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.id === id);
};
