import { useEffect, useState } from 'react';
import { getAllRecommendationsService } from '../services';

const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        setLoading(true);

        const data = await getAllRecommendationsService();

        setRecommendations(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadRecommendations();
  }, []);

  return { recommendations, loading, error, setRecommendations };
};

export default useRecommendations;
