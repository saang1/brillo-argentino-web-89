
export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  modality: 'Presencial' | 'Online' | 'Híbrido';
  instructor: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  requirements: string[];
  curriculum: string[];
  certification: string;
  image: string;
  highlights: string[];
  price: string;
}

export const cursosData: Course[] = [
  {
    id: 'detailing-basico',
    title: 'Curso de Detailing Básico para Motos',
    shortDescription: 'Aprende las técnicas fundamentales del detailing en motos desde cero.',
    fullDescription: 'Un curso completo diseñado para quienes quieren iniciarse en el mundo del detailing profesional en motos. Aprenderás desde los conceptos básicos hasta las técnicas más efectivas para el cuidado y mantenimiento de motos.',
    duration: '4 semanas',
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
    image: '/lovable-uploads/curso.jpg',
    highlights: [
      'Clases 100% prácticas',
      'Kit de herramientas incluido',
      'Certificación oficial'
    ],
    price: '$85.000'
  },
  {
    id: 'detailing-avanzado',
    title: 'Curso de Detailing Avanzado',
    shortDescription: 'Técnicas profesionales de detailing para expertos.',
    fullDescription: 'Curso avanzado para profesionales que buscan perfeccionar sus técnicas de detailing con métodos innovadores y productos de última generación.',
    duration: '6 semanas',
    modality: 'Presencial',
    instructor: 'Miguel Torres - Especialista Internacional',
    level: 'Avanzado',
    requirements: [
      'Experiencia previa en detailing',
      'Conocimiento de productos básicos',
      'Herramientas propias'
    ],
    curriculum: [
      'Técnicas de corrección de pintura',
      'Aplicación de cerámicos',
      'Paint Protection Film',
      'Restauración de cueros',
      'Detailing engine bay',
      'Proyecto final'
    ],
    certification: 'Certificado de Detailing Avanzado Elite Garage Spa',
    image: '/lovable-uploads/curso.jpg',
    highlights: [
      'Técnicas de nivel profesional',
      'Productos premium incluidos',
      'Mentoring personalizado'
    ],
    price: '$150.000'
  },
  {
    id: 'ceramicos-especializacion',
    title: 'Especialización en Cerámicos',
    shortDescription: 'Domina la aplicación de recubrimientos cerámicos profesionales.',
    fullDescription: 'Curso especializado en recubrimientos cerámicos, desde la preparación de superficies hasta la aplicación y mantenimiento de cerámicos de alta gama.',
    duration: '3 semanas',
    modality: 'Híbrido',
    instructor: 'Ana García - Certificada internacional',
    level: 'Intermedio',
    requirements: [
      'Curso básico completado',
      'Experiencia en pulido',
      'Conocimiento de pinturas automotrices'
    ],
    curriculum: [
      'Tipos de recubrimientos cerámicos',
      'Preparación de superficies',
      'Técnicas de aplicación',
      'Control de calidad',
      'Mantenimiento post-aplicación',
      'Resolución de problemas'
    ],
    certification: 'Certificado de Especialización en Cerámicos',
    image: '/lovable-uploads/curso.jpg',
    highlights: [
      'Certificación internacional',
      'Productos cerámicos incluidos',
      'Modalidad híbrida'
    ],
    price: '$120.000'
  },
  {
    id: 'emprendimiento-detailing',
    title: 'Emprendimiento en Detailing',
    shortDescription: 'Aprende a montar tu propio negocio de detailing.',
    fullDescription: 'Curso integral que combina técnicas de detailing con conocimientos empresariales para crear tu propio negocio exitoso en el sector.',
    duration: '8 semanas',
    modality: 'Online',
    instructor: 'Roberto Silva - Empresario y Especialista',
    level: 'Intermedio',
    requirements: [
      'Conocimientos básicos de detailing',
      'Interés emprendedor',
      'Acceso a internet estable'
    ],
    curriculum: [
      'Fundamentos del negocio',
      'Análisis de mercado',
      'Equipamiento necesario',
      'Fijación de precios',
      'Marketing digital',
      'Gestión de clientes',
      'Escalabilidad del negocio',
      'Plan de negocios'
    ],
    certification: 'Certificado de Emprendimiento en Detailing',
    image: '/lovable-uploads/curso.jpg',
    highlights: [
      'Modalidad online',
      'Plan de negocios incluido',
      'Seguimiento post-curso'
    ],
    price: '$95.000'
  }
];
