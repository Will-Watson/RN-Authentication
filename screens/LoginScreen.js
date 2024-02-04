import { useState } from 'react';
import { Alert } from 'react-native';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const response = await login(email, password);
    } catch (error) {
      Alert.alert('Authentication Failed!', 'Could not log you in. Please check your credentials or try again later.', [{ text: 'Okay' }]);
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message='Loggin In....' />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
