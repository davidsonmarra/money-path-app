import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SelectInstitutionScreen from 'src/features/add-wallet/screens/select-institution';

export type AddWalletStackParamList = {
  SelectInstitution: undefined;
};

const {Navigator, Screen} = createStackNavigator<AddWalletStackParamList>();

const AddWalletStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SelectInstitution" component={SelectInstitutionScreen} />
    </Navigator>
  );
};

export default AddWalletStack;
