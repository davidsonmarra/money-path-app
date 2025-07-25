import React, { useEffect, useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AmountContainer from 'src/features/make-transfer/screens/amount/ui';
import { PrivateStackParamList } from 'src/features/navigation';
import useMakeTransferForm from '../../hooks/make-transfer-form';
import { IconType } from 'src/assets/icons/types';
import { useWalletStore } from 'src/hooks/useWallet';

type MakeTransferScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'MakeTransferStack'
>;

export interface WalletUiProps {
  id: string;
  label: string;
  icon: IconType;
  iconBackground: string;
  type: 'bank' | 'wallet';
  balance: number;
  value: string;
}

const AmountScreen = () => {
  const { wallets, getWallets } = useWalletStore();
  const { watch, setValue } = useMakeTransferForm();
  const [sourceWallet, setSourceWallet] = useState<WalletUiProps>();
  const [destinationWallet, setDestinationWallet] = useState<WalletUiProps>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date | null>(null);
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

  const handleSelectSourceWallet = (walletId: string) => {
    const wallet = formattedWallets.find(wallet => wallet.id === walletId);
    setSourceWallet(wallet);
    setValue('sourceWalletId', walletId);
  };

  const handleSelectDestinationWallet = (walletId: string) => {
    const wallet = formattedWallets.find(wallet => wallet.id === walletId);
    setDestinationWallet(wallet);
    setValue('destinationWalletId', walletId);
  };

  const handleSwapWallets = () => {
    const temp = sourceWallet;
    setSourceWallet(destinationWallet);
    setDestinationWallet(temp);
  };

  const handleDateChange = (date: Date) => {
    setTempDate(date);
  };

  const handleOpenDatePicker = () => {
    const currentTimestamp = watch('timestamp');
    setTempDate(currentTimestamp || new Date());
    setShowDatePicker(true);
  };

  const handleConfirmDate = () => {
    if (tempDate) {
      setValue('timestamp', tempDate);
      setShowDatePicker(false);
    }
  };

  const handleCancelDate = () => {
    setTempDate(null);
    setShowDatePicker(false);
  };

  const formatValue = (rawValue: string): string | undefined => {
    if (!rawValue) return undefined;

    const numericValue = parseInt(rawValue.replace(/\D/g, ''), 10);
    return (numericValue / 100).toFixed(2).replace('.', ',');
  };

  const formattedWallets: WalletUiProps[] = useMemo(() => {
    return wallets.map(wallet => ({
      id: wallet.id,
      label: wallet.name,
      icon: wallet.icon,
      iconBackground: wallet.backgroundColor,
      type: 'wallet',
      balance: wallet.balance,
      value: wallet.id,
    }));
  }, [wallets]);

  useEffect(() => {
    getWallets();
  }, []);

  useEffect(() => {
    setSourceWallet(formattedWallets[0]);

    if (watch('type') === 'transfer') {
      setDestinationWallet(formattedWallets[1]);
    }
  }, [wallets]);

  useEffect(() => {
    if (!watch('timestamp')) {
      setValue('timestamp', new Date());
    }
  }, []);

  return (
    <AmountContainer
      onBack={handleOnBack}
      onConfirm={handleOnConfirm}
      amount={formatValue(watch('amount')?.toString() ?? '') ?? '0,00'}
      transferBeetweenWallets={watch('type') === 'transfer'}
      onChangeAmount={handleChangeText}
      wallets={formattedWallets.filter(
        wallet =>
          wallet.id !== sourceWallet?.id && wallet.id !== destinationWallet?.id,
      )}
      selectedSourceWallet={sourceWallet}
      selectedDestinationWallet={destinationWallet}
      onSelectSourceWallet={handleSelectSourceWallet}
      onSelectDestinationWallet={handleSelectDestinationWallet}
      onSwapWallets={handleSwapWallets}
      timestamp={watch('timestamp')}
      showDatePicker={showDatePicker}
      onDateChange={handleDateChange}
      onOpenDatePicker={handleOpenDatePicker}
      onCloseDatePicker={handleCancelDate}
      onConfirmDate={handleConfirmDate}
      tempDate={tempDate}
    />
  );
};

export default AmountScreen;
