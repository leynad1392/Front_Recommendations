
import { useToken } from '../context/AuthContext';
import {
  deleteRecommendationService,
  voteRecommendationService,
} from '../services';

export const Recommendation = ({
  recommendations,
  setRecommendations,
  recommendation,
}) => {
  const [token] = useToken();

  const handleDelete = async (id) => {
    if (window.confirm('¿Deseas eliminar la recomendación?')) {
      try {
        const res = await deleteRecommendationService(id, token);
        if (res.status === 'error') {
          window.alert(res.message);
        } else {
          setRecommendations(
            recommendations.filter((recommendation) => recommendation.id !== id)
          );
        }
      } catch (error) {}
    }
  };

  const handleLike = async (id) => {
    try {
      const res = await voteRecommendationService(id, token);
      if (res.body === 'error') {
        window.alert(res.message);
      } else {
        setRecommendations(
          recommendations.map((recommendation) => {
            if (res === 'Like agregado') recommendation.likes++;
            else recommendation.likes--;
            return recommendation;
          })
        );
      }
    } catch (error) {}
  };
  return (
    <article className='section'>
      {recommendation.image ? (
        <img className='img'
          src={`${process.env.REACT_APP_BACKEND}/uploads/${recommendation.image}`}
          alt={recommendation.text}
        />
      ) : null}
      <div className='carts'>

      <p>Title: {recommendation.title}</p>
      <p> Category: {recommendation.category}</p>
      <p> Place: {recommendation.place}</p>
      <p> LeadIn: {recommendation.leadin}</p>
      <p> Description: {recommendation.text}</p>
      <p>
        By {recommendation.CreatedBy} 
      </p>
      {token && (
        <button className='butdos' onClick={() => handleDelete(recommendation.id)}>
          {' '}
          Eliminar
        </button>
      )}
      {token && (
        <button className='butdos' onClick={() => handleLike(recommendation.id)}>
          Agregar like
        </button>
      )}

      <p>{recommendation.likes}</p>
      </div>
    </article>
  );
};
