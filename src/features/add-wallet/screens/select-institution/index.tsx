import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import SelectInstitutionContainer from 'src/features/add-wallet/screens/select-institution/ui';
import {PrivateStackParamList} from 'src/features/navigation';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const SelectInstitutionScreen = () => {
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  return <SelectInstitutionContainer onBack={navigation.goBack} />;
};

export default SelectInstitutionScreen;
