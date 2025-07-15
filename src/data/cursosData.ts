
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
    image: '/lovable-uploads/curso.jpeg',
    highlights: [
      'Clases 100% prácticas',
      'Kit de herramientas incluido',
      'Certificación oficial'
    ]
  }
];
