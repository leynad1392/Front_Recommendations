import { useEffect, useState } from "react";
import { getSingleRecommendationService } from "../services";



const useRecommendation = (id) => {
    const [recommendations, setRecommendations] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

 useEffect( () => {
   const loadRecommendations = async () => {
    try{
        setLoading(true);
        
        const data = await getSingleRecommendationService (id);

        setRecommendations(data);
    }catch(error) {
        setError(error.message);
    }finally{
        setLoading(false);
    }
   };
   loadRecommendations();

 }, [id]);

    return{ recommendations, loading, error};
};

export default useRecommendation;