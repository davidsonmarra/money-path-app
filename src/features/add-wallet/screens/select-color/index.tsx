import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrivateStackParamList} from 'src/features/navigation';
import SelectColorContainer from 'src/features/add-wallet/screens/select-color/ui';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';
import {InstitutionProps} from 'src/features/add-wallet/types';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const SelectColorScreen = () => {
  const {institution, setInstitution} = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const handleConfirm = () => {
    navigation.navigate('AddWalletStack', {
      screen: 'Name',
    });
  };

  return (
    <SelectColorContainer
      institution={institution as InstitutionProps}
      onBack={navigation.goBack}
      selectColor={setInstitution}
      onConfirm={handleConfirm}
    />
  );
};

export default SelectColorScreen;
