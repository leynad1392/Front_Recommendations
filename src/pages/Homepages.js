import { ErrorMessage } from '../components/ErrorMessage';
import { RecommendationsList } from '../components/RecommendationsList';
import useRecommendations from '../hooks/useRecommendations';

export const Homepages = () => {
  const { recommendations, loading, error, setRecommendations } =
    useRecommendations();
  if (loading) return <p>cargando recomendaciones</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Lasts Recommendations</h1>
      <RecommendationsList
        recommendations={recommendations}
        setRecommendations={setRecommendations}
      />
    </section>
  );
};
