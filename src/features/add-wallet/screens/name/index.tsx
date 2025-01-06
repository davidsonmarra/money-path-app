import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrivateStackParamList} from 'src/features/navigation';
import NameContainer from 'src/features/add-wallet/screens/name/ui';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';
import {InstitutionProps} from 'src/features/add-wallet/types';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const NameScreen = () => {
  const [name, setName] = useState('');
  const {institution, setInstitution} = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const handleOnConfirm = () => {
    const newInstitution: InstitutionProps = {
      ...(institution as InstitutionProps),
      name,
    };
    setInstitution(newInstitution);
  };

  useEffect(() => {
    if (institution?.name === name) {
      navigation.navigate('AddWalletStack', {
        screen: 'Feedback',
      });
    }
  }, [institution?.name]);

  return (
    <NameContainer
      name={name}
      setName={setName}
      onBack={navigation.goBack}
      onConfirm={handleOnConfirm}
    />
  );
};

export default NameScreen;
