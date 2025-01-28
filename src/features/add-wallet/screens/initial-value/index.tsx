import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrivateStackParamList} from 'src/features/navigation';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';
import InitialValueContainer from 'src/features/add-wallet/screens/initial-value/ui';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const InitialValueScreen = () => {
  const {watch, setValue} = useAddWalletForm();
  const {navigate, goBack} = useNavigation<AddWalletScreenNavigationProp>();

  const handleOnConfirm = () => {
    navigate('AddWalletStack', {
      screen: 'Feedback',
    });
  };

  const formatValue = (rawValue: string): string | undefined => {
    if (!rawValue) return undefined;

    const numericValue = parseInt(rawValue.replace(/\D/g, ''), 10);
    return (numericValue / 100).toFixed(2).replace('.', ',');
  };

  const handleChangeText = (text: string) => {
    const numericValue = text.replace(/\D/g, '');
    setValue('amount', Number(numericValue));
  };

  return (
    <InitialValueContainer
      value={formatValue(watch('amount')?.toString() ?? '')}
      onBack={goBack}
      setValue={handleChangeText}
      onConfirm={handleOnConfirm}
    />
  );
};

export default InitialValueScreen;
