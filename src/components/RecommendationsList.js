
import { Recommendation } from "./Recommendation"

export const RecommendationsList = ({recommendations}) => {
    return recommendations.length ? (
        <ul>
            {recommendations.map((recommendation) => (
                <li key={recommendation.id}><Recommendation recommendation={recommendation} />

                </li>
            ))}
        </ul>
    ) : (
        <p>no recomendaciones</p>
    );
};