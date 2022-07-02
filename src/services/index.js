export const getAllRecommendationsService = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/recommendations`)

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
};

export const getSingleRecommendationService = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/recommendations/${id}`);

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.message);
    }
    return json.data;
}