import axios from 'axios';

export const createUser = async (email, password) => {
  try {
    const response = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.API_KEY,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};
