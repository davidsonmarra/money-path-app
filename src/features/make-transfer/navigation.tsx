import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from 'src/features/make-transfer/screens/category';
import MakeTransferFormContext from 'src/features/make-transfer/context/make-transfer-form';

export type MakeTransferStackParamList = {
  Category: undefined;
};

const { Navigator, Screen } =
  createStackNavigator<MakeTransferStackParamList>();

const MakeTransferStack = () => {
  return (
    <MakeTransferFormContext>
      <Navigator
        initialRouteName="Category"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Category" component={CategoryScreen} />
      </Navigator>
    </MakeTransferFormContext>
  );
};

export default MakeTransferStack;
