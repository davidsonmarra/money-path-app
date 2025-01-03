import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeStack, {HomeStackParamList} from 'src/features/home/navigation';
import AddWalletStack, {
  AddWalletStackParamList,
} from 'src/features/add-wallet/navigation';
import SettingsStack, {
  SettingsStackParamList,
} from 'src/features/settings/navigation';
import LoginScreen from 'src/features/login/screens/login';

export type PrivateStackParamList = {
  AddWalletStack: NavigatorScreenParams<AddWalletStackParamList>;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

export type PublicStackParamList = {
  Login: undefined;
};

const {Navigator: PrivateNavigator, Screen: PrivateScreen} =
  createStackNavigator<PrivateStackParamList>();
const {Navigator: PublicNavigator, Screen: PublicScreen} =
  createStackNavigator<PublicStackParamList>();

export const PrivateStack = () => {
  return (
    <PrivateNavigator
      screenOptions={{
        headerShown: false,
      }}>
      <PrivateScreen name="HomeStack" component={HomeStack} />
      <PrivateScreen name="SettingsStack" component={SettingsStack} />
      <PrivateScreen name="AddWalletStack" component={AddWalletStack} />
    </PrivateNavigator>
  );
};

export const PublicStack = () => {
  return (
    <PublicNavigator
      screenOptions={{
        headerShown: false,
      }}>
      <PublicScreen name="Login" component={LoginScreen} />
    </PublicNavigator>
  );
};
