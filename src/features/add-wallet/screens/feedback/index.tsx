import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import FeedbackContainer, {
  States,
} from 'src/features/add-wallet/screens/feedback/ui';
import {PrivateStackParamList} from 'src/features/navigation';
import useAddWalletForm from 'src/features/add-wallet/hooks/use-add-wallet-form';

type AddWalletScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'AddWalletStack'
>;

const FeedbackScreen = () => {
  const [state, setState] = useState(States.loading);
  const {institution} = useAddWalletForm();
  const navigation = useNavigation<AddWalletScreenNavigationProp>();

  const crateWallet = async () => {
    setState(States.loading);
    setTimeout(() => {
      setState(States.default);
    }, 2000);
  };

  const backToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeStack'}],
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
