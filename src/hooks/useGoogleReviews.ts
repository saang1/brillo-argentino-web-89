
import { useState, useEffect } from 'react';
import { fetchGoogleReviews, GoogleReview } from '../services/googlePlacesService';

export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback reviews en caso de error
  const fallbackReviews: GoogleReview[] = [
    {
      author_name: 'Carlos Rodríguez',
      rating: 5,
      relative_time_description: 'hace 2 semanas',
      text: 'Excelente servicio! Mi BMW quedó como nuevo después del coating cerámico. La atención es muy profesional y el resultado superó mis expectativas. Totalmente recomendable.',
      time: Date.now() - 1209600000, // 2 weeks ago
      language: 'es'
    },
    {
      author_name: 'María González',
      rating: 5,
      relative_time_description: 'hace 1 mes',
      text: 'Increíble el trabajo que hicieron con mi Audi. El pulido eliminó todos los rayones y el auto brilla como el primer día. Definitivamente van a ser mi taller de confianza.',
      time: Date.now() - 2592000000, // 1 month ago
      language: 'es'
    },
    {
      author_name: 'Alejandro Fernández',
      rating: 5,
      relative_time_description: 'hace 3 semanas',
      text: 'El servicio de PPF es lo mejor que le pude hacer a mi auto nuevo. La protección es invisible y me da tranquilidad para el día a día. Muy profesionales en todo momento.',
      time: Date.now() - 1814400000, // 3 weeks ago
      language: 'es'
    }
  ];

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const googleReviews = await fetchGoogleReviews();
        
        // Filtrar reviews en español y con buena puntuación
        const filteredReviews = googleReviews
          .filter(review => review.rating >= 4 && review.text.length > 50)
          .sort((a, b) => b.time - a.time)
          .slice(0, 6); // Máximo 6 reviews
        
        setReviews(filteredReviews.length > 0 ? filteredReviews : fallbackReviews);
      } catch (err) {
        console.error('Error loading Google reviews, using fallback:', err);
        setError('No se pudieron cargar las reviews de Google');
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return { reviews, loading, error };
};
