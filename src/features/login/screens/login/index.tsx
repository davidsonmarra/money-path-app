import React from 'react';
import LoginContainer from 'src/features/login/screens/login/ui';
import {useAuthStore} from 'src/hooks/useAuth';

const LoginScreen = () => {
  const {loginWithGoogle, loginWithApple} = useAuthStore();

  return (
    <LoginContainer
      loginWithApple={loginWithApple}
      loginWithGoogle={loginWithGoogle}
    />
  );
};

export default LoginScreen;
