import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrivateStackParamList} from 'src/features/navigation';
import SelectInstitutionContainer from 'src/features/add-wallet/screens/select-institution/ui';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';
import {InstitutionProps} from 'src/features/add-wallet/types';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const SelectInstitutionScreen = () => {
  const {setInstitution} = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const handleSelectInstitution = (institution: InstitutionProps) => {
    setInstitution(institution);

    institution.type === 'personal'
      ? navigation.navigate('AddWalletStack', {
          screen: 'SelectColor',
        })
      : navigation.navigate('AddWalletStack', {
          screen: 'Name',
        });
  };

  return (
    <SelectInstitutionContainer
      onBack={navigation.goBack}
      selectInstitution={handleSelectInstitution}
    />
  );
};

export default SelectInstitutionScreen;
