
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
  video: string;
  images: string[];
  faqs: { question: string; answer: string; }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'limpieza-tapizados',
    title: 'Limpieza de tapizados de autos y interiores',
    shortDescription: 'Tratamientos profesionales con productos certificados para una limpieza profunda y duradera.',
    fullDescription: 'Transformamos el interior de tu vehículo con una limpieza profunda y especializada. Utilizamos productos certificados que garantizan resultados duraderos y un ambiente saludable.',
    price: 'Consultar',
    features: ['Restauración profunda de tapizados', 'Limpieza integral del interior', 'Productos profesionales y seguros', 'Renová el interior de tu auto'],
    process: [
      'Inspección y preparación',
      'Limpieza y lubricacion de trasmisión',
      'Pre-tratamiento de manchas',
      'Limpieza con extractor',
      'Secado y acabado'
    ],
    benefits: [
      'Ambiente saludable',
      'Apariencia renovada',
      'Mayor durabilidad',
      'Desinfección y eliminación de olores'
    ],
    duration: '3-5 horas',
    warranty: '6 meses',
    video: "/lovable-uploads/limpieza.mp4",
    images: ['/lovable-uploads/limpieza-interior.jpg'],
    faqs: [
      {
        question: '¿Pueden eliminar cualquier tipo de mancha de los asientos?',
        answer: 'La mayoría de las manchas se pueden eliminar con nuestros productos y técnicas especializadas. Manchas de comida, bebidas, grasa y líquidos corporales tienen alta probabilidad de remoción completa. Algunas manchas muy antiguas o de tinta permanente pueden reducirse significativamente pero no eliminarse al 100%.'
      },
      {
        question: '¿Cuánto tiempo tarda en secar el tapizado después de la limpieza?',
        answer: 'Con nuestro sistema de extracción profesional, el tapizado queda húmedo pero no empapado. El tiempo de secado es de 2 a 4 horas dependiendo del clima y ventilación. Recomendamos dejar las ventanas entreabierta para acelerar el proceso y evitar que se forme humedad.'
      }
    ]
  },
  {
    id: 'pulido-abrillantado',
    title: 'Pulidos y Abrillantados Autos y Motos',
    shortDescription: 'Dejá tu vehículo con un acabado impecable y brillante, eliminando imperfecciones y restaurando su color original.',
    fullDescription: 'Ofrecemos un servicio profesional de pulido y abrillantado que elimina rayones, marcas y oxidación de la pintura. Utilizamos técnicas avanzadas y productos de alta calidad para devolverle a tu vehículo su brillo original y protegerlo contra futuros daños.',
    price: 'Desde $25.000',
    features: ['Pulido en varias etapas', 'Brillo espejo y acabado premium', 'Servicio para autos y motos', 'Corrección de rayones y marcas'],
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
    video: "/lovable-uploads/pulido.mp4",
    images: ['/lovable-uploads/pulido-abrillantado.JPG'],
    faqs: [
      {
        question: '¿Se pueden eliminar todos los rayones?',
        answer: 'La mayoría de los rayones superficiales y medios se pueden eliminar. Los rayones profundos pueden minimizarse significativamente.'
      },
      {
        question: '¿Afecta la garantía del vehículo?',
        answer: 'No, nuestros procesos profesionales no afectan la garantía del fabricante.'
      }
    ],
    
  },
  {
    id: 'tratamientos-cuidado',
    title: 'Tratamientos para el cuidado',
    shortDescription: 'Protegé y realzá tu vehículo con nuestros tratamientos especializados. Cuidamos cada superficie con productos de alta calidad para mantenerlo siempre como nuevo.',
    fullDescription: 'Ofrecemos una amplia gama de tratamientos para el cuidado de tu vehículo, desde protección de pintura hasta acondicionamiento de interiores. Nuestros productos profesionales aseguran que cada superficie esté protegida y se mantenga en óptimas condiciones.',
    price: 'Desde $8.000',
    features: ['Protección de pintura y superficies', 'Tratamientos para cuero, plásticos y telas', 'Defensa contra rayos UV y clima', 'Productos profesionales y seguros'],
    process: [
      'Inspección detallada del vehículo',
      'Limpieza profunda',
      'Aplicación de productos especializados',
      'Trabajo por etapas y con precisión',
      'Control final de calidad'
    ],
    benefits: [
      'Mayor protección y durabilidad',
      'Brillo profundo y acabado premium',
      'Apariencia renovada',
      'Facilitan la limpieza diaria'
    ],
    duration: '2-3 horas',
    warranty: '6 meses',
    images: ['/lovable-uploads/tratamiento.jpeg'],
    faqs: [
      {
        question: '¿El tratamiento elimina completamente los malos olores del interior?',
        answer: 'Sí, en la mayoría de los casos. Usamos técnicas de limpieza profunda y desinfección que eliminan olores causados por humedad, comida, cigarrillo o mascotas. En casos extremos, podemos aplicar tratamientos adicionales para garantizar resultados efectivos.'
      },
      {
        question: '¿Qué pasa si llueve después del tratamiento?',
        answer: 'No hay problema. Los productos que aplicamos se fijan rápidamente y son resistentes al agua una vez curados. Además, muchos de nuestros tratamientos ayudan a repeler el agua, protegiendo aún más tu vehículo.'
      }
    ],
    video: ""
  },
  {
    id: 'ceramicos-vidrios',
    title: 'Tratamientos cerámicos y vidrios líquido',
    shortDescription: 'Aplicación de recubrimientos cerámicos para una protección duradera y un acabado brillante en la pintura y vidrios de tu vehículo.',
    fullDescription: 'Ofrecemos tratamientos cerámicos avanzados que proporcionan una capa de protección duradera contra rayones, manchas y contaminantes. Nuestros recubrimientos cerámicos no solo mejoran el brillo de la pintura, sino que también facilitan la limpieza y mantenimiento del vehículo.',
    price: 'Desde $5.000',
    features: ['Protección Cerámica Duradera', 'Efecto hidrofóbico', 'Brillo profesional', 'Resistencia extrema'],
    process: [
      'Lavado profundo',
      'Descontaminación',
      'Pulido y corrección',
      'Preparación de superficie',
      'Aplicación del recubrimiento'
    ],
    benefits: [
      'Protección duradera',
      'Efecto hidrofóbico',
      'Brillo profesional',
      'Resistencia extrema'
    ],
    duration: '1-3 horas',
    warranty: 'Permanente',
    video: "/lovable-uploads/ceramico.mp4",
    images: ['/lovable-uploads/ceramicos-vidrios.jpg'],
    faqs: [
      {
        question: '¿Cuánto dura el tratamiento cerámico y requiere mantenimiento?',
        answer: 'El tratamiento cerámico tiene una duración de 3 a 5 años dependiendo del uso del vehículo y condiciones de exposición. Para mantener sus propiedades óptimas, se recomienda realizar lavados con productos pH neutro y aplicar un mantenimiento cada 6 meses con productos específicos para cerámicos. Evita el uso de ceras o abrillantadores convencionales que pueden afectar el recubrimiento.'
      },
      {
        question: '¿En qué se diferencia del encerado tradicional y vale la pena la inversión?',
        answer: 'A diferencia de las ceras que duran 2-3 meses, el tratamiento cerámico forma un enlace químico permanente con la pintura ofreciendo protección superior y duradera. Aunque la inversión inicial es mayor, a largo plazo resulta más económico al reducir la frecuencia de mantenimientos y proteger el valor del vehículo. Además, proporciona resistencia química, térmica y mecánica que las ceras no pueden igualar.'
      }
    ],
    
  },
  {
    id: 'lavado-motor-motos',
    title: 'Lavados a vapor de motos',
    shortDescription: 'Mantené tu moto impecable con nuestro servicio de lavado a vapor, eliminando suciedad y grasa sin dañar componentes eléctricos ni mecánicos.',
    fullDescription: 'Nuestro servicio de lavado a vapor para motos utiliza tecnología avanzada que permite una limpieza profunda sin necesidad de productos químicos agresivos. El vapor penetra en los rincones más difíciles, eliminando suciedad, grasa y contaminantes sin dañar componentes eléctricos ni mecánicos.',
    price: 'Consultar',
    features: ['Aplicación de vapor', 'Desengrasa profundo', 'Seguro para electrónicos', 'Resultados inmediatos'],
    process: [
      'Inspección y protección',
      'Hidratacion de partes plásticas, aplicación de cera protectora, dependiendo del material, Hidratacion de motor con barnis protector para mangueras y motores',
      'Aplicación de vapor',
      'Lavado,desengrasados y detallado',
      'Acabado y control de calidad'
    ],
    benefits: [
      'Ecológico y seguro',
      'Limpieza profunda',
      'Ahorro de tiempo',
      'Preserva componentes'
    ],
    duration: '1-3 días',
    warranty: '2 años',
    video: "/lovable-uploads/lavado-motor.mp4",
    images: [],
    faqs: [
      {
        question: '¿Es seguro lavar con vapor los componentes eléctricos y el motor de mi moto?',
        answer: 'Sí, es completamente seguro. El vapor controlado a 160°C no genera la humedad excesiva del lavado tradicional, por lo que puede aplicarse sobre tableros, conexiones eléctricas, motor y sistema de inyección sin riesgo de cortocircuitos. El proceso utiliza vapor saturado seco que se evapora rápidamente, protegiendo todos los componentes sensibles mientras logra una limpieza profunda.'
      },
      {
        question: '¿El lavado a vapor funciona igual en motos muy sucias o con grasa acumulada?',
        answer: 'Si, el lavado a vapor es altamente efectivo incluso en motos con suciedad y grasa acumulada. Utilizamos vapor a alta presión que penetra y descompone la suciedad más difícil, eliminando grasa y contaminantes sin dañar las superficies. Además, podemos complementar el servicio con productos específicos para tratar manchas difíciles o áreas muy sucias.'
      }
    ],
    
  },
  {
    id: 'tapizados-motos-autos',
    title: 'Reparación de tapizados de autos y motos',
    shortDescription: 'Reparación y restauración de tapizados de autos y motos, utilizando técnicas avanzadas para devolverles su aspecto original.',
    fullDescription: 'Servicio profesional de reparación de tapizados que restaura roturas, quemaduras y desgaste en asientos de cuero, tela y vinilo. Utilizamos técnicas de costura especializada, parches invisibles y retoque de color para devolver la apariencia original, garantizando resultados duraderos y estéticamente perfectos tanto en autos como motos.',
    price: 'Consultar',
    features: ['Reparación de roturas y rasgaduras', 'Restauración de quemaduras y agujeros', 'Retoque y igualación de colores', 'Costura profesional y parches invisibles'],
    process: [
      'Evaluación del daño',
      'Preparación del área',
      'Selección de materiales',
      'Reparación técnica',
      'Acabado y protección'
    ],
    benefits: [
      'Ahorro económico',
      'Preserva valor',
      'Reparación invisible',
      'Durabilidad garantizada'
    ],
    duration: '1-3 días',
    warranty: '2 años',
    images: ['/lovable-uploads/reparacion-tapizado.jpg'],
    faqs: [
      {
        question: '¿Qué tipos de daños se pueden reparar en los tapizados?',
        answer: 'Reparamos roturas, rasgaduras, quemaduras de cigarrillo, agujeros, desgaste por uso y decoloración en cuero, tela, vinilo y materiales sintéticos. La mayoría de daños tienen solución, evaluamos cada caso para determinar la mejor técnica de reparación.'
      },
      {
        question: '¿Es más conveniente reparar o cambiar todo el tapizado?',
        answer: 'La reparación es recomendable cuando el daño es localizado y el resto del tapizado está en buen estado. Es hasta 70% más económico que el reemplazo completo y mantiene la originalidad del vehículo. Solo recomendamos cambio total cuando el deterioro es generalizado.'
      }
    ],
    video: ""
  },
  {
    id: 'pintura-motos',
    title: 'Trabajos de pintura para motos',
    shortDescription: 'Realizamos trabajos de pintura personalizados para motos, desde retoques hasta repintados completos, con acabados de alta calidad.',
    fullDescription: 'Ofrecemos servicios de pintura para motos que incluyen desde retoques menores hasta repintados completos. Utilizamos pinturas de alta calidad y técnicas avanzadas para garantizar un acabado duradero y estéticamente perfecto. Personalizamos el diseño según tus preferencias, asegurando que tu moto luzca única y espectacular.',
    price: 'Consultar',
    features: ['Preparación completa', 'Pintura multicapa', 'Diseños personalizados', 'Acabado profesional'],
    process: [
      'Trabajamos con pinturas poliuretanicas ,bicapa y tricapa mates o brillantes',
      'Desmontaje y preparación',
      'Aplicación de primer',
      'Pintura base y color',
      'Barnizado y pulido'
    ],
    benefits: [
      'Renovación completa',
      'Protección anticorrosiva',
      'Personalización única',
      'Valor agregado'
    ],
    duration: '1-3 días',
    warranty: '2 años',
    video: "/lovable-uploads/pintura-moto.mp4",
    images: ['/lovable-uploads/pintura-moto.JPG'],
    faqs: [
      {
        question: '¿Puedo cambiar completamente el color original de mi moto?',
        answer: 'Sí, podemos cambiar cualquier color original. Utilizamos pinturas automotrices de alta calidad que cubren perfectamente el color anterior. Solo necesitas actualizar la documentación del vehículo según las regulaciones locales de tránsito.'
      },
      {
        question: '¿La pintura nueva resiste igual que la de fábrica?',
        answer: 'Nuestra pintura multicapa con barniz UV ofrece resistencia superior a la original de fábrica. Incluye protección contra rayos solares, lluvia ácida, gasolina y productos químicos, con garantía de no decoloración por 2 años.'
      }
    ],
    
  },
  {
    id: 'limpieza-cascos-motos',
    title: 'Limpieza de cascos de motos',
    shortDescription: 'Mantené tu casco de moto limpio y seguro con nuestro servicio especializado, eliminando suciedad, grasa y olores de forma efectiva.',
    fullDescription: 'Nuestro servicio de limpieza de cascos de motos asegura que tu casco esté libre de suciedad, grasa y olores. Utilizamos productos específicos y técnicas adecuadas para cada tipo de material, garantizando una limpieza profunda sin dañar la estructura del casco.',
    price: 'Consultar',
    features: ['Limpieza exterior completa', 'Desinfección interior profunda', 'Limpieza de visera y anti-fog', 'Tratamiento antibacteriano y desodorante'],
    process: [
      'Inspección inicial',
      'Desmontaje y preparación',
      'Limpieza exterior',
      'Desinfección interior',
      'Secado y ensamble'
    ],
    benefits: [
      'Higiene garantizada',
      'Visibilidad óptima',
      'Prolonga vida útil',
      'Comodidad renovada'
    ],
    duration: '1-3 días',
    warranty: '2 años',
    video: "/lovable-uploads/limpieza-casco.mp4",
    images: [],
    faqs: [
      {
        question: '¿La limpieza profesional puede eliminar rayones de la visera?',
        answer: 'Podemos eliminar rayones superficiales menores con técnicas de pulido especializado. Para rayones profundos que comprometan la seguridad, recomendamos el reemplazo de la visera por una nueva para mantener la protección visual óptima.'
      },
      {
        question: '¿Con qué frecuencia debo limpiar profesionalmente mi casco?',
        answer: 'Recomendamos limpieza profesional cada 2-3 meses para uso diario, o cada 6 meses para uso ocasional. Si notas malos olores, acumulación de grasa o la visera pierde transparencia, es momento de una limpieza especializada.'
      }
    ],
  },
  {
    id: 'pulido-escape-motos',
    title: 'Pulido de escapes y pintura de escapes de motos',
    shortDescription: 'Devolvé el brillo y la estética a los escapes de tu moto con nuestro servicio de pulido y pintura especializada, eliminando óxido y manchas.',
    fullDescription: 'Nuestro servicio de pulido y pintura de escapes de motos elimina el óxido, manchas y marcas, devolviendo el brillo original. Utilizamos técnicas avanzadas de pulido y pinturas resistentes al calor para garantizar un acabado duradero y estéticamente atractivo.',
    price: 'Consultar',
    features: ['Limpieza exterior completa', 'Desinfección interior profunda', 'Limpieza de visera y anti-fog', 'Tratamiento antibacteriano y desodorante'],
    process: [
      'Limpieza de escapes y tratamiento anti-óxido',
      'Pintura alta temperatura',
      'Pinturas mate o satinadas en rojo ,negro ,gris plata o negro satinado',
      'Secado y ensamble',
      'Control de calidad final'
    ],
    benefits: [
      'Resistencia térmica superior',
      'Protección anticorrosiva',
      'Renovación estética completa',
      'Durabilidad extendida'
    ],
    duration: '1-3 días',
    warranty: '2 años',
    video: "/lovable-uploads/escapepintura.mp4",
    images: ['/lovable-uploads/pulido-escape.jpg'],
    faqs: [
      {
        question: '¿La pintura del escape se mantiene con las altas temperaturas del motor?',
        answer: 'Sí, utilizamos pintura térmica especializada que resiste temperaturas de hasta 650°C sin decolorarse ni desprenderse. Esta pintura está específicamente formulada para componentes de escape y mantiene su acabado y propiedades protectoras durante todo el ciclo de vida del motor.'
      },
      {
        question: '¿Cuánto tiempo debo esperar antes de usar la moto después del tratamiento?',
        answer: 'Recomendamos esperar 24 horas para el curado completo de la pintura antes del primer uso. Durante los primeros arranques es normal percibir un ligero humo, que desaparece una vez que la pintura alcanza su temperatura de trabajo y se asienta definitivamente.'
      }
    ],
    
  }
];

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.id === id);
};
