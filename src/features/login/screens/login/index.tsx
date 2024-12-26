import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoginContainer from 'src/features/login/screens/login/ui';

async function onGoogleButtonPress() {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const signInResult = await GoogleSignin.signIn();

  const idToken = signInResult.data?.idToken;

  if (!idToken) {
    throw new Error('No ID token found');
  }

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

const LoginScreen = () => {
  const handleLoginWithApple = () => {
    console.log('Login with Apple');
  };

  return (
    <LoginContainer
      loginWithApple={handleLoginWithApple}
      loginWithGoogle={onGoogleButtonPress}
    />
  );
};

export default LoginScreen;
