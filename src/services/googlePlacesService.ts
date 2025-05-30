
const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY'; // Reemplazar con tu API key
const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Extraído de tu enlace de Google Maps

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}&language=es`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    
    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }
    
    return data.result.reviews || [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    throw error;
  }
};
