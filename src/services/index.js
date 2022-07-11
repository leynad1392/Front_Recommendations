export const getAllRecommendationsService = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/recommendations`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getSingleRecommendationService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/recommendations/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ email, password, username }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: 'POST',
    body: JSON.stringify({ email, password, username }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteRecommendationService = async (id, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/recommendations/${id}`,
    {
      method: 'DELETE',
      headers: { Authorization: token },
    }
  );
  const json = await response.json();

  return json.message;
};

export const voteRecommendationService = async (id, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/recommendations/vote/${id}`,
    {
      method: 'POST',
      headers: { Authorization: token },
    }
  );
  const json = await response.json();

  return json.message;
};

export const filterRecommendationsCategory = async (category, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/recommendations?category=${category}`,
    {
      method: 'GET',
      headers: { Authorization: token },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const filterRecommendationsPlace = async (place, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/recommendations?place=${place}`,
    {
      method: 'GET',
      headers: { Authorization: token },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const createNewRecommendation = async (formData, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/`, {
    method: 'POST',
    headers: { Authorization: token },
    body: formData,
  });
  const body = await response.json();
  return body;
};
