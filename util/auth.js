import axios from 'axios';

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response.data);
};

export const createUser = async (email, password) => {
  try {
    const response = await authenticate('signUp', email, password);
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (email, password) => {
  try {
    const response = await authenticate('signInWithPassword', email, password);
  } catch (error) {
    throw new Error(error);
  }
}
