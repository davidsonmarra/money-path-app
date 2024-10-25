import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeStack, {HomeStackParamList} from 'src/features/home/navigation';
import SettingsStack, {
  SettingsStackParamList,
} from 'src/features/settings/navigation';

export type PrivateStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

const {Navigator, Screen} = createStackNavigator<PrivateStackParamList>();

const PrivateStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeStack" component={HomeStack} />
      <Screen name="SettingsStack" component={SettingsStack} />
    </Navigator>
  );
};

export default PrivateStack;
