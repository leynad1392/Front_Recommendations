import {Link} from "react-router-dom" 

export const Recommendation = ({recommendations}) => {
    return(
        <article>
            <p>{recommendations.text}</p>
            {recommendations.image ? (
                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${recommendations.image}`}alt={recommendations.text}/>
            ) : null}
            <p>By{recommendations.CreatedBy} on

            <Link to={`/recommendations/${recommendations.id}`}>
                {new Date(recommendations.created_at).toLocaleString()}
                </Link> 
            </p>
        </article>
    );
};