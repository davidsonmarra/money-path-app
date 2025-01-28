import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrivateStackParamList} from 'src/features/navigation';
import SelectColorContainer from 'src/features/add-wallet/screens/select-color/ui';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';
import {IconType} from 'src/assets/icons/types';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const SelectColorScreen = () => {
  const {watch, setValue} = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const handleConfirm = () => {
    navigation.navigate('AddWalletStack', {
      screen: 'Name',
    });
  };

  return (
    <SelectColorContainer
      color={watch('color')}
      backgroundColor={watch('backgroundColor')}
      icon={watch('icon') as IconType}
      onBack={navigation.goBack}
      setColor={color => setValue('color', color)}
      setBackgroundColor={backgroundColor =>
        setValue('backgroundColor', backgroundColor)
      }
      onConfirm={handleConfirm}
    />
  );
};

export default SelectColorScreen;
