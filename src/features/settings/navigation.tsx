import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListSettingsScreen from 'src/features/settings/screens/list-settings';

export type SettingsStackParamList = {
  ListSettingsScreen: undefined;
};

const {Navigator, Screen} = createStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="ListSettingsScreen" component={ListSettingsScreen} />
    </Navigator>
  );
};

export default SettingsStack;
