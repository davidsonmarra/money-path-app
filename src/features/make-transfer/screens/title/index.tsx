import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import TitleContainer from 'src/features/make-transfer/screens/title/ui';
import { PrivateStackParamList } from 'src/features/navigation';
import useMakeTransferForm from 'src/features/make-transfer/hooks/make-transfer-form';
import { titleSchema } from 'src/features/make-transfer/context/make-transfer-form/schema';

type MakeTransferScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'MakeTransferStack'
>;

const TitleScreen = () => {
  const { watch, setValue } = useMakeTransferForm();
  const navigation = useNavigation<MakeTransferScreenNavigationProp>();

  const handleOnConfirm = () => {
    navigation.navigate('MakeTransferStack', {
      screen: 'Type',
    });
  };

  const handleValidateForm = () => {
    const { success } = titleSchema.safeParse({
      title: watch('title'),
    });
    return success;
  };

  return (
    <TitleContainer
      onBack={navigation.goBack}
      onConfirm={handleOnConfirm}
      setTitle={value => setValue('title', value)}
      setDescription={value => setValue('description', value)}
      title={watch('title')}
      description={watch('description')}
      isDisabled={!handleValidateForm()}
    />
  );
};

export default TitleScreen;
