import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'src/features/home/screens/home';

const {Navigator, Screen} = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};

export default HomeStack;
