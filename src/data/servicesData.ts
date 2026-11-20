
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
  /** Texto corto que se muestra arriba del título (opcional) */
  eyebrow?: string;
  /** Título de la pestaña del navegador (opcional) */
  pageTitle?: string;
  // Botones a los cotizadores de promo.elitegaraje.com.ar (se muestran arriba, junto a WhatsApp)
  cotizadores?: { label: string; url: string; }[];
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
    shortDescription: 'Preparamos la pintura según su estado y la protegemos con cerámicos CarPro y Gtechniq o vidrio líquido. Protección de 1 a 5 años, para autos y motos.',
    fullDescription: 'No es solo un sellador: es preparar la pintura y protegerla. Revisamos la pintura de tu auto, la corregimos según su estado y recién ahí aplicamos el cerámico, una capa transparente que la protege del sol, la lluvia, la contaminación y los químicos de la calle, suma brillo y hace que el agua y la suciedad resbalen. Trabajamos con CarPro, Gtechniq y Ternnova, con 5 opciones de sellado según la protección que buscás. También protegemos motos con pintura brillante, mate o satinada.',
    price: 'Desde $400.000',
    features: ['Preparación de la pintura incluida', '5 opciones de sellado', 'Protección de 1 a 5 años', 'CarPro, Gtechniq y Ternnova'],
    process: [
      'Evaluación de la pintura: laca, rayones, swirls y opacidad',
      'Lavado y descontaminación',
      'Corrección y pulido según el diagnóstico',
      'Preparación y desengrasado de la superficie',
      'Aplicación del sellador elegido, panel por panel',
      'Control final y entrega con indicaciones de mantenimiento'
    ],
    benefits: [
      'Protege del sol, la lluvia, la contaminación y los químicos',
      'Más brillo y profundidad de color',
      'El agua y la suciedad resbalan',
      'El vehículo se ensucia menos y se lava más fácil'
    ],
    duration: 'Según el estado de la pintura',
    warranty: 'Protección de 1 a 5 años según el sellador',
    video: "/lovable-uploads/ceramico.mp4",
    images: ['/lovable-uploads/ceramicos-vidrios.jpg'],
    cotizadores: [
      { label: 'Calculá tu precio', url: 'https://promo.elitegaraje.com.ar/ceramico/' },
      { label: 'Calculá el precio para tu moto', url: 'https://promo.elitegaraje.com.ar/ceramico-motos/' }
    ],
    faqs: [
      {
        question: '¿Por qué hay que preparar la pintura antes del cerámico, incluso en un 0km?',
        answer: 'El cerámico no tapa defectos: sella la pintura tal como está. Por eso siempre la preparamos antes. Aunque el auto sea nuevo, la pintura llega con marcas y rayaduras finas del transporte y la concesionaria, así que todos los 0km llevan un pulido de 1 paso. En autos usados revisamos la laca y definimos la corrección según su estado: pulido de 1 paso, corrección intermedia o corrección intensiva de 3 pasos.'
      },
      {
        question: '¿Qué sellador me conviene y cuánto dura?',
        answer: 'Depende del uso y de cuánto tiempo pensás tener el auto. Vidrio líquido Ternnova (hasta 12 meses) si buscás la menor inversión o vas a vender el auto pronto. CarPro CQuartz Lite 2.0 (hasta 2 años) como primer cerámico. CarPro CQuartz UK 3.0 (18 a 24 meses, más resistente y con más brillo) si el auto duerme en la calle o tiene uso intenso. Gtechniq Crystal Serum Light (3 a 5 años) si pensás quedártelo varios años. Y el doble sellado Crystal Serum Light + EXO para la máxima protección.'
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'El tratamiento completo en autos, con la preparación de la pintura incluida, arranca desde $400.000. El total depende del tamaño del auto, el estado de la pintura y el sellador que elijas. Mandanos por WhatsApp marca, modelo y año, si es 0km o usado y 2 o 3 fotos de la pintura con luz de día, y te confirmamos el precio exacto. En autos repintados o con defectos importantes hacemos una evaluación previa.'
      },
      {
        question: '¿Hacen tratamiento cerámico en motos?',
        answer: 'Sí. Para pinturas brillantes tenemos opciones desde vidrio líquido hasta Gtechniq Crystal Serum Light + EXO, y para pinturas mate o satinadas usamos Gtechniq C1, que protege sin cambiar la terminación. Incluye lavado, preparación de superficies y acondicionamiento de plásticos exteriores, desde $100.000.'
      },
      {
        question: '¿Qué formas de pago aceptan?',
        answer: 'Efectivo o transferencia. Con tarjeta Santander, 3 cuotas sin interés; con otras tarjetas, 3 cuotas con recargo. Los turnos se reservan con seña.'
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
    id: 'service-motos',
    title: 'Service de motos',
    eyebrow: 'Para motos de 150 a 1200 cc',
    pageTitle: 'Service de motos en Barracas, CABA | Elite Garaje Spa',
    shortDescription: 'Mantenimiento mecánico de tu moto en nuestro taller de Barracas: aceite y filtros, transmisión, embrague, frenos y regulación de válvulas.',
    fullDescription: 'Además del detailing, hacemos el mantenimiento mecánico de tu moto en nuestro taller de Barracas, en un área exclusiva para motos. Cambio de aceite y filtros, transmisión, embrague, frenos y regulación de válvulas, con el mismo cuidado que ponemos en cada trabajo. Pedí tu turno por WhatsApp.',
    price: 'Consultar',
    features: ['Cambio de aceite y filtros', 'Transmisión y embrague', 'Control de frenos', 'Regulación de válvulas'],
    process: [
      'Recepción de la moto y consulta sobre su uso y kilometraje',
      'Revisión general del estado de la unidad',
      'Cambio de aceite y filtros',
      'Revisión y ajuste de transmisión, embrague y frenos',
      'Regulación de válvulas, si corresponde según el kilometraje',
      'Prueba final y entrega'
    ],
    benefits: [
      'Moto más confiable y segura',
      'Mayor vida útil del motor',
      'Prevención de fallas y reparaciones costosas',
      'Todo en un mismo lugar: service y detailing'
    ],
    duration: 'Según el trabajo a realizar',
    warranty: 'Consultar',
    video: '',
    images: [
      '/lovable-uploads/service-motos/moto-taller.jpg',
      '/lovable-uploads/service-motos/taller-amplio.jpg',
      '/lovable-uploads/service-motos/taller-herramientas.jpg',
      '/lovable-uploads/service-motos/moto-frente.jpg',
      '/lovable-uploads/service-motos/moto-calle.jpg'
    ],
    faqs: [
      {
        question: '¿Qué incluye el service?',
        answer: 'Cambio de aceite y filtros, revisión de transmisión, embrague y frenos, y regulación de válvulas cuando corresponde según el kilometraje. Si encontramos algo más que necesite atención, te avisamos antes de hacer cualquier trabajo extra.'
      },
      {
        question: '¿Cada cuánto tengo que hacerle el service a mi moto?',
        answer: 'Depende del modelo y del uso. Como referencia general se hace según los kilómetros que indica el fabricante o una vez por año, lo que ocurra primero. Pasanos marca, modelo, año y kilometraje y te decimos qué le toca.'
      },
      {
        question: '¿Cuánto cuesta?',
        answer: 'El precio depende de la moto y de lo que necesite. Escribinos por WhatsApp con marca, modelo, año y kilómetros y te pasamos el presupuesto.'
      },
      {
        question: '¿Puedo sumar un lavado o detailing en el mismo turno?',
        answer: 'Sí. Como también hacemos detailing de motos, podés combinar el service con un lavado, pulido o tratamiento cerámico y retirar la moto lista en una sola visita.'
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
    images: ['/lovable-uploads/tapizado.JPG'],
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
    id: 'autos-inundados',
    title: 'Restauración de Autos Inundados',
    shortDescription: 'Recuperamos tu auto después de una inundación con extracción total de agua, secado profundo, desinfección y cambio de aislantes para dejarlo como nuevo.',
    fullDescription: 'La inundación de un vehículo es una emergencia que requiere atención inmediata y especializada. Nuestro servicio de restauración integral actúa en todas las capas del interior: extracción de agua, secado profundo, desinfección antibacteriana, eliminación de hongos y olores, y reemplazo de aislantes de piso dañados. Devolvemos tu auto a condiciones óptimas de forma segura y duradera.',
    price: 'Consultar',
    features: [
      'Extracción total de agua y humedad',
      'Secado profundo con equipos industriales',
      'Desinfección antibacteriana y antifúngica',
      'Eliminación de olores a humedad',
      'Cambio de aislantes de piso dañados',
      'Tratamiento de tapizados y alfombras'
    ],
    process: [
      'Inspección y evaluación del nivel de daño',
      'Extracción de agua con equipos de alta potencia',
      'Desmontaje de alfombras, aislantes y tapizados afectados',
      'Secado industrial con sopladores y deshumidificadores',
      'Desinfección y tratamiento antibacteriano completo',
      'Reemplazo de aislantes y rearmado del interior'
    ],
    benefits: [
      'Prevención de hongos y bacterias',
      'Eliminación definitiva de olores a humedad',
      'Interior completamente restaurado',
      'Protección a largo plazo del vehículo',
      'Ahorro frente al reemplazo completo del interior'
    ],
    duration: '2-5 días',
    warranty: '6 meses',
    video: '/lovable-uploads/auto-inundado.mp4',
    images: ['/lovable-uploads/limpieza-interior.jpg'],
    faqs: [
      {
        question: '¿Qué tan rápido debo llevar el auto después de la inundación?',
        answer: 'Cuanto antes, mejor. Idealmente dentro de las primeras 24-48 horas. Con el tiempo, la humedad favorece la aparición de hongos, bacterias y oxidación interna que complican la restauración y aumentan los costos.'
      },
      {
        question: '¿Se pueden recuperar los tapizados o hay que reemplazarlos?',
        answer: 'Depende del material y el tiempo de exposición al agua. En muchos casos los tapizados pueden limpiarse y desinfectarse completamente. Si hay hongos o daño irreversible, recomendamos el reemplazo para garantizar la salud dentro del vehículo.'
      },
      {
        question: '¿Por qué es necesario cambiar los aislantes de piso?',
        answer: 'Los aislantes de piso absorben grandes cantidades de agua y son muy difíciles de secar completamente. Si quedan húmedos, generan hongos y olores persistentes. Su reemplazo es fundamental para una restauración duradera y saludable.'
      }
    ]
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
