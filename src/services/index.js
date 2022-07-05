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
};

export const registerUserService = async ({ email, password, username }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  };

  export const logInUserService = async ({ email, password }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };
  export const getMyDataService = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
      headers: {
        Authorization: token,
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };