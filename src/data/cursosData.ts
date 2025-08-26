
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
  video?: string; // Video opcional para el curso
  highlights: string[];
}

export const cursosData: Course[] = [
  {
    id: 'detailing-basico',
    title: 'Curso de Detailing Básico para Motos',
    shortDescription: 'Aprende las técnicas fundamentales del detailing en motos desde cero.',
    fullDescription: 'Nuestro curso está dirigido a todas las personas que deseen aprender desde cero el cuidado profesional de motocicletas, ya sean nuevas o con uso prolongado. Aprenderás a realizar tratamientos cerámicos, acrílicos o sin recubrimientos, y a manipular correctamente cada producto según el tipo de superficie.\n\nIncluye técnicas de lavado (tradicional, a vapor, en seco), métodos de mantenimiento post-lavado y cuidados específicos para motos con ploteos, vinilos o películas PPF.\n\nIdeal para quienes buscan iniciar su propio emprendimiento, abrir un taller de estética vehicular o trabajar de forma independiente brindando servicios de detailing especializado para motos.',
    duration: '4 días',
    modality: 'Presencial',
    instructor: 'Sebastian Pablo Gramajo y Benjamin Navarro - 7 años de experiencia',
    level: 'Principiante',
    requirements: [
      'No se requiere experiencia previa',
      'Interés en el cuidado de motos',
      'Disponibilidad de horarios'
    ],
    curriculum: [
      'Modulo 1 introducción al cuidado de motocicletas y mantenimiento y detailing avanzado',
      'Modulo 2 equipamiento y productos',
      'Modulo 3 lavados de motocicletas en todas sus técnicas',
      'Modulo 4 mantenimiento y cuidado de materiales de cuerina y cueros',
      'Modulo 5 mantenimiento de ploteos vinilos líquidos y ppf',
      'Modulo 6 pulido y mantenimiento de pinturas en todas sus superficies de todo tipo',
      'Modulo 7 mantenimiento básico de motocicletas',
      'Modulo 8 practica y Simulaciones Reales en Diferentes Tipos de Motocicletas',
      'Modulo 9 ceras y todas sus variedades ,selladores ,tratamientos acrílicos y Cerámicos vidrio líquido diferencias'
    ],
    certification: 'Certificado de Detailing Básico Elite Garaje Spa',
    image: '',
    video: '/lovable-uploads/curso-detailing-moto.mp4', // Agrega tu video aquí
    highlights: [
      'Clases 100% prácticas',
      'Kit de herramientas incluido',
      'Certificación oficial'
    ]
  }
];
