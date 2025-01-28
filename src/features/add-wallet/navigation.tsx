import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedbackScreen from 'src/features/add-wallet/screens/feedback';
import InitialValueScreen from 'src/features/add-wallet/screens/initial-value';
import NameScreen from 'src/features/add-wallet/screens/name';
import SelectColorScreen from 'src/features/add-wallet/screens/select-color';
import SelectInstitutionScreen from 'src/features/add-wallet/screens/select-institution';
import AddWalletFormContext from './context/add-wallet-form';
import {IconType} from 'src/assets/icons/types';
import {AddWalletFormValues} from './context/add-wallet-form/schema';

export type AddWalletStackParamList = {
  Feedback: undefined;
  InitialValue: undefined;
  Name: undefined;
  SelectColor: undefined;
  SelectInstitution: undefined;
};

const {Navigator, Screen} = createStackNavigator<AddWalletStackParamList>();

const AddWalletStack = () => {
  return (
    <AddWalletFormContext>
      <Navigator
        initialRouteName="SelectInstitution"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Feedback" component={FeedbackScreen} />
        <Screen name="InitialValue" component={InitialValueScreen} />
        <Screen name="Name" component={NameScreen} />
        <Screen name="SelectColor" component={SelectColorScreen} />
        <Screen name="SelectInstitution" component={SelectInstitutionScreen} />
      </Navigator>
    </AddWalletFormContext>
  );
};

export default AddWalletStack;
