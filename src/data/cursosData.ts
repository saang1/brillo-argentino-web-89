
export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  modality: 'Presencial' | 'Online' | 'Híbrido';
  instructor: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  requirements: string[];
  curriculum: string[];
  certification: string;
  image: string;
  highlights: string[];
}

export const cursosData: Course[] = [
  {
    id: 'detailing-basico',
    title: 'Curso de Detailing Básico para Principiantes',
    shortDescription: 'Aprende las técnicas fundamentales del car detailing desde cero.',
    fullDescription: 'Un curso completo diseñado para quienes quieren iniciarse en el mundo del car detailing profesional. Aprenderás desde los conceptos básicos hasta las técnicas más efectivas para el cuidado y mantenimiento de vehículos.',
    duration: '4 semanas',
    price: '$45,000',
    modality: 'Presencial',
    instructor: 'Carlos Mendoza - 10 años de experiencia',
    level: 'Principiante',
    requirements: [
      'No se requiere experiencia previa',
      'Interés en el cuidado automotriz',
      'Disponibilidad de horarios'
    ],
    curriculum: [
      'Introducción al Car Detailing',
      'Herramientas y productos básicos',
      'Técnicas de lavado seguro',
      'Aplicación de ceras y protectores',
      'Limpieza de interiores',
      'Práctica supervisada'
    ],
    certification: 'Certificado de Detailing Básico Elite Garage Spa',
    image: '/placeholder.svg',
    highlights: [
      'Clases 100% prácticas',
      'Kit de herramientas incluido',
      'Certificación oficial'
    ]
  },
  {
    id: 'pulido-avanzado',
    title: 'Técnicas Avanzadas de Pulido y Corrección',
    shortDescription: 'Domina las técnicas profesionales de corrección de pintura.',
    fullDescription: 'Curso especializado en técnicas avanzadas de pulido y corrección de pintura. Ideal para profesionales que buscan perfeccionar sus habilidades y ofrecer servicios de mayor calidad.',
    duration: '6 semanas',
    price: '$75,000',
    modality: 'Presencial',
    instructor: 'Miguel Torres - Especialista en corrección de pintura',
    level: 'Avanzado',
    requirements: [
      'Experiencia básica en detailing',
      'Conocimiento de herramientas',
      'Curso básico completado o experiencia equivalente'
    ],
    curriculum: [
      'Análisis de defectos en pintura',
      'Selección de compounds y pads',
      'Técnicas de pulido paso a paso',
      'Uso de pulidoras rotativas y orbitales',
      'Corrección de rayones profundos',
      'Acabados espejo'
    ],
    certification: 'Certificado de Especialista en Corrección de Pintura',
    image: '/placeholder.svg',
    highlights: [
      'Técnicas profesionales',
      'Equipos especializados',
      'Práctica en vehículos reales'
    ]
  },
  {
    id: 'tratamientos-ceramicos',
    title: 'Especialización en Tratamientos Cerámicos',
    shortDescription: 'Aprende a aplicar y mantener recubrimientos cerámicos profesionales.',
    fullDescription: 'Curso especializado en la aplicación de tratamientos cerámicos de última generación. Aprenderás sobre los diferentes tipos de ceramic coatings y sus aplicaciones.',
    duration: '3 semanas',
    price: '$55,000',
    modality: 'Presencial',
    instructor: 'Ana García - Certificada en ceramic coatings',
    level: 'Intermedio',
    requirements: [
      'Conocimientos básicos de detailing',
      'Experiencia en preparación de superficies',
      'Curso básico recomendado'
    ],
    curriculum: [
      'Tipos de recubrimientos cerámicos',
      'Preparación de superficie',
      'Técnicas de aplicación',
      'Curado y mantenimiento',
      'Garantías y durabilidad',
      'Troubleshooting común'
    ],
    certification: 'Certificado de Aplicador de Ceramic Coatings',
    image: '/placeholder.svg',
    highlights: [
      'Productos premium incluidos',
      'Certificación reconocida',
      'Soporte post-curso'
    ]
  },
  {
    id: 'detailing-motos',
    title: 'Detailing Especializado para Motocicletas',
    shortDescription: 'Técnicas específicas para el cuidado y detailing de motocicletas.',
    fullDescription: 'Curso especializado en el detailing de motocicletas, cubriendo las particularidades y técnicas específicas para el cuidado de estos vehículos.',
    duration: '3 semanas',
    price: '$40,000',
    modality: 'Presencial',
    instructor: 'Roberto Silva - Especialista en motos',
    level: 'Intermedio',
    requirements: [
      'Experiencia básica en detailing',
      'Conocimiento básico de motocicletas',
      'Herramientas básicas'
    ],
    curriculum: [
      'Particularidades del detailing en motos',
      'Limpieza de motores y partes mecánicas',
      'Tratamiento de cromados y metales',
      'Cuidado de asientos y plásticos',
      'Protección contra corrosión',
      'Mantenimiento preventivo'
    ],
    certification: 'Certificado de Detailing para Motocicletas',
    image: '/placeholder.svg',
    highlights: [
      'Técnicas específicas para motos',
      'Trabajo con diferentes materiales',
      'Casos prácticos reales'
    ]
  }
];
