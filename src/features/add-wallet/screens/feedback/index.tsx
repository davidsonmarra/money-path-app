import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import FeedbackContainer, {
  States,
} from 'src/features/add-wallet/screens/feedback/ui';
import { PrivateStackParamList } from 'src/features/navigation';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';
import { createWallet } from 'src/features/add-wallet/service';
import { WalletProps } from 'src/features/add-wallet/types';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const FeedbackScreen = () => {
  const [state, setState] = useState(States.loading);
  const { getValues } = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const crateWallet = async () => {
    console.log('crateWallet');
    setState(States.loading);
    console.log('getValues', getValues());
    try {
      await createWallet(getValues() as WalletProps);
      setState(States.default);
    } catch (error) {
      console.log('error', error);
      setState(States.error);
    }
  };

  const backToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],
    });
  };

  const getOnPress = () =>
    ({
      [States.default]: backToHome,
      [States.error]: crateWallet,
      [States.loading]: () => {},
    }[state]);

  useEffect(() => {
    crateWallet();
  }, []);

  return (
    <FeedbackContainer
      state={state}
      onClose={backToHome}
      onPress={getOnPress()}
    />
  );
};

export default FeedbackScreen;
