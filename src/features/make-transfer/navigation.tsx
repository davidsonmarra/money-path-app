import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from 'src/features/make-transfer/screens/category';
import TitleScreen from 'src/features/make-transfer/screens/title';
import TypeScreen from 'src/features/make-transfer/screens/type';
import MakeTransferFormContext from 'src/features/make-transfer/context/make-transfer-form';

export type MakeTransferStackParamList = {
  Type: undefined;
  Category: undefined;
  Title: undefined;
};

const { Navigator, Screen } =
  createStackNavigator<MakeTransferStackParamList>();

const MakeTransferStack = () => {
  return (
    <MakeTransferFormContext>
      <Navigator
        initialRouteName="Type"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Type" component={TypeScreen} />
        <Screen name="Category" component={CategoryScreen} />
        <Screen name="Title" component={TitleScreen} />
      </Navigator>
    </MakeTransferFormContext>
  );
};

export default MakeTransferStack;
