import React from 'react';
import LoginContainer from 'src/features/login/screens/login/ui';

const LoginScreen = () => {
  const handleLoginWithGoogle = () => {
    console.log('Login with Google');
  };

  const handleLoginWithApple = () => {
    console.log('Login with Apple');
  };

  return (
    <LoginContainer
      loginWithApple={handleLoginWithApple}
      loginWithGoogle={handleLoginWithGoogle}
    />
  );
};

export default LoginScreen;
