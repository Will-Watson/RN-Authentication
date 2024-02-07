import axios from 'axios';

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = (email, password) => {
  try {
    return authenticate('signUp', email, password);
  } catch (error) {
    throw new Error(error);
  }
};

export const login = (email, password) => {
  try {
    return authenticate('signInWithPassword', email, password);
  } catch (error) {
    throw new Error(error);
  }
};
