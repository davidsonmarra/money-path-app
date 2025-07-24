import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from 'src/features/make-transfer/screens/category';
import TitleScreen from 'src/features/make-transfer/screens/title';
import TypeScreen from 'src/features/make-transfer/screens/type';
import MakeTransferFormContext from 'src/features/make-transfer/context/make-transfer-form';
import AmountScreen from 'src/features/make-transfer/screens/amount';

export type MakeTransferStackParamList = {
  Type: undefined;
  Category: undefined;
  Title: undefined;
  Amount: undefined;
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
        <Screen name="Type" component={TypeScreen} />
        <Screen name="Category" component={CategoryScreen} />
        <Screen name="Title" component={TitleScreen} />
        <Screen name="Amount" component={AmountScreen} />
      </Navigator>
    </MakeTransferFormContext>
  );
};

export default MakeTransferStack;
