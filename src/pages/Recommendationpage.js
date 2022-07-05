import { useParams } from "react-router-dom"
import  useRecommendation  from "../hooks/useRrecommendation";
import { Recommendation } from "../components/Recommendation";
import { ErrorMessage } from "../components/ErrorMessage";



export const  Recommendationpages = () =>{

    const { id } = useParams();

    const { recommendation, loading, error } = useRecommendation(id);
    if(loading) return<p>cargando....</p>
    if(error) return <ErrorMessage message={error} />;
    return (<section>
        <h1>recommendation</h1>
            <Recommendation recommendations= {recommendation} />
        <p>aqui las recomendaciones</p>
    </section>
    );
};