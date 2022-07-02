import {Link} from "react-router-dom"
import { Recommendations } from "../components"; 

export const Recommendations = ({recommendations}) => {
    return(
        <article>
            <p>{recommendations.text}</p>
            {recommendations.image ? (
                <img src={`${process.env.REACT_APP_BACKEND}/uploads/${recommendation.image}`}alt={recommendation.image}/>
            ) : null}
            <p>By{recommendations.CreatedBy} on

            <Link to={`/recommendation/${recommendations.id}`}>
                {new Date(recommendations.created_at).toLocaleString()}
                </Link> 
            </p>
        </article>
    );
};