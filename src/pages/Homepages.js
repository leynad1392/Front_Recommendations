import { useState } from 'react';
import { ErrorMessage } from '../components/ErrorMessage';
import { RecommendationsList } from '../components/RecommendationsList';
import { useToken } from '../context/AuthContext';
import useRecommendations from '../hooks/useRecommendations';
import {
  filterRecommendationsCategory,
  filterRecommendationsPlace,
} from '../services';

export const Homepages = () => {
  const { recommendations, loading, error, setRecommendations } =
    useRecommendations();
  const [category, setCategory] = useState('');
  const [place, setPlace] = useState('');
  const [token] = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await filterRecommendationsCategory(category, token);
    console.log(data);
    setRecommendations(data);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const data = await filterRecommendationsPlace(place, token);
    console.log(data);
    setRecommendations(data);
  };

  if (loading) return <p>cargando recomendaciones</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Lasts Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='category'
          onChange={(e) => setCategory(e.target.value)}
        />
        <button>Search by Category</button>
      </form>

      <form onSubmit={handleSubmit2}>
        <input
          type='text'
          name='place'
          onChange={(e) => setPlace(e.target.value)}
        />
        <button>Search by Place</button>
      </form>
      <RecommendationsList
        recommendations={recommendations}
        setRecommendations={setRecommendations}
      />
    </section>
  );
};
