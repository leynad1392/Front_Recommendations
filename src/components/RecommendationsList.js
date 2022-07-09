import { Recommendation } from './Recommendation';

export const RecommendationsList = ({
  recommendations,
  setRecommendations,
}) => {
  return recommendations.length ? (
    <ul>
      {recommendations.map((recommendation) => (
        <li key={recommendation.id}>
          <Recommendation
            recommendations={recommendations}
            recommendation={recommendation}
            setRecommendations={setRecommendations}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>no recomendaciones</p>
  );
};
