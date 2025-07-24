import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AmountContainer from 'src/features/make-transfer/screens/amount/ui';
import { PrivateStackParamList } from 'src/features/navigation';
import useMakeTransferForm from '../../hooks/make-transfer-form';

type MakeTransferScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'MakeTransferStack'
>;

interface Wallet {
  id: string;
  name: string;
  balance: number;
}

// Mock de carteiras para demonstração
const mockWallets: Wallet[] = [
  { id: '1', name: 'Carteira Principal', balance: 5000 },
  { id: '2', name: 'Carteira de Investimentos', balance: 15000 },
  { id: '3', name: 'Carteira de Emergência', balance: 3000 },
];

const AmountScreen = () => {
  const { watch, setValue } = useMakeTransferForm();
  const navigation = useNavigation<MakeTransferScreenNavigationProp>();

  const handleOnBack = () => {
    navigation.goBack();
  };

  const handleOnConfirm = () => {
    navigation.navigate('MakeTransferStack', {
      screen: 'Title',
    });
  };

  const handleChangeText = (text: string) => {
    const numericValue = text.replace(/\D/g, '');
    setValue('amount', Number(numericValue));
  };

  const handleSelectSourceWallet = (wallet: Wallet) => {
    setValue('sourceWallet', wallet);
  };

  const handleSelectDestinationWallet = (wallet: Wallet) => {
    setValue('destinationWallet', wallet);
  };

  const formatValue = (rawValue: string): string | undefined => {
    if (!rawValue) return undefined;

    const numericValue = parseInt(rawValue.replace(/\D/g, ''), 10);
    return (numericValue / 100).toFixed(2).replace('.', ',');
  };

  return (
    <AmountContainer
      onBack={handleOnBack}
      onConfirm={handleOnConfirm}
      amount={formatValue(watch('amount')?.toString() ?? '') ?? '0,00'}
      showWalletSection={watch('type') === 'transfer'}
      onChangeAmount={handleChangeText}
      wallets={mockWallets}
      selectedSourceWallet={watch('sourceWallet')}
      selectedDestinationWallet={watch('destinationWallet')}
      onSelectSourceWallet={handleSelectSourceWallet}
      onSelectDestinationWallet={handleSelectDestinationWallet}
    />
  );
};

export default AmountScreen;
