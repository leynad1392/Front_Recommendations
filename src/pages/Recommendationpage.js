import { useParams } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage";
import  useRecommendation  from "../hooks/useRrecommendation";
import { Recommendation } from "../components/Recommendation";


export const  Recommendationpages = () =>{

    const { id } = useParams();

    const { recommendations, loading, error } = useRecommendation(id);
    if(loading) return<p>cargando....</p>
    if(error) return <ErrorMessage message={error} />;
    return (<section>
        <h1>recommendation</h1>
            <Recommendation recommendations= {recommendations} />
        <p>aqui las recomendaciones</p>
    </section>
    );
};