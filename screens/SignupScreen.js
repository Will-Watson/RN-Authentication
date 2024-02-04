import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const response = await createUser(email, password);
    } catch (error) {
      Alert.alert('Authentication Failed!', 'Could not create user. Please try again later.', [{ text: 'Okay' }]);
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating User....' />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
