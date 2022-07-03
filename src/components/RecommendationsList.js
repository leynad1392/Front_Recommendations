
import { Recommendation } from "../components/Recommendation";

export const RecommendationsList = ({recommendations}) => {
    return recommendations.length ? (
        <ul>
            {recommendations.map((recommendations) => (
                <li key={recommendations.id}><Recommendation recommendations={recommendations} />

                </li>
            ))}
        </ul>
    ) : (
        <p>no recomendaciones</p>
    );
};