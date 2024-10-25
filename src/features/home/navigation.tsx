import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'src/features/home/screens/home';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};

export default HomeStack;
