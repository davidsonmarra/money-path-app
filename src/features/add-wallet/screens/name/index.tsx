import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrivateStackParamList} from 'src/features/navigation';
import NameContainer from 'src/features/add-wallet/screens/name/ui';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const NameScreen = () => {
  const {watch, setValue} = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const handleOnConfirm = () => {
    navigation.navigate('AddWalletStack', {
      screen: 'InitialValue',
    });
  };

  return (
    <NameContainer
      name={watch('name')}
      setName={name => setValue('name', name)}
      onBack={navigation.goBack}
      onConfirm={handleOnConfirm}
    />
  );
};

export default NameScreen;
