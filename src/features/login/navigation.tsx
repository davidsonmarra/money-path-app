import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/features/login/screens/login';

const {Navigator, Screen} = createStackNavigator();

const LoginStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  );
};

export default LoginStack;
