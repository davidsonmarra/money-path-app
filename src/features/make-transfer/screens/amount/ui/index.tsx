import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  ButtonType,
  Header,
  InputAmount,
  SelectionDropdown,
  Spacer,
  Text,
  TextType,
} from 'src/components';
import { ChevronRightIcon } from 'src/assets/icons';
import useStyles from 'src/features/make-transfer/screens/amount/ui/styles';

interface Wallet {
  id: string;
  name: string;
  balance: number;
}

interface Props {
  onBack: () => void;
  onConfirm: () => void;
  amount: string;
  onChangeAmount: (value: string) => void;
  showWalletSection: boolean;
  wallets?: Wallet[];
  selectedSourceWallet?: Wallet;
  selectedDestinationWallet?: Wallet;
  onSelectSourceWallet?: (wallet: Wallet) => void;
  onSelectDestinationWallet?: (wallet: Wallet) => void;
}

const AmountContainer = ({
  onBack,
  onConfirm,
  amount,
  onChangeAmount,
  showWalletSection,
  wallets = [],
  selectedSourceWallet,
  selectedDestinationWallet,
  onSelectSourceWallet,
  onSelectDestinationWallet,
}: Props) => {
  const styles = useStyles();

  const walletItems = wallets.map(wallet => ({
    id: wallet.id,
    label: wallet.name,
    value: wallet,
  }));

  const selectedSourceWalletItem = selectedSourceWallet
    ? {
        id: selectedSourceWallet.id,
        label: selectedSourceWallet.name,
        value: selectedSourceWallet,
      }
    : undefined;

  const selectedDestinationWalletItem = selectedDestinationWallet
    ? {
        id: selectedDestinationWallet.id,
        label: selectedDestinationWallet.name,
        value: selectedDestinationWallet,
      }
    : undefined;

  const handleSelectSourceWallet = (item: { value: Wallet }) => {
    onSelectSourceWallet?.(item.value);
  };

  const handleSelectDestinationWallet = (item: { value: Wallet }) => {
    onSelectDestinationWallet?.(item.value);
  };

  return (
    <>
      <Header text="Valor da transferência" onLeftIconPress={onBack} />
      <View style={styles.amountContainer}>
        <InputAmount
          value={amount}
          onChangeText={onChangeAmount}
          placeholder="0,00"
          testID="input-amount"
          keyboardType="numeric"
        />
      </View>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        {showWalletSection && (
          <View>
            <Text type={TextType.headingMedium}>Selecione as carteiras</Text>
            <Spacer height={12} />
            <Text type={TextType.textMediumRegular}>
              Para criar uma transferência, precisamos que você informe a
              carteira de origem e destino:
            </Text>
            <Spacer height={16} />

            <View style={styles.walletsContainer}>
              <View style={styles.dropdownContainer}>
                <Text
                  type={TextType.textSmallRegular}
                  style={styles.dropdownLabel}
                >
                  De
                </Text>
                <SelectionDropdown
                  items={walletItems}
                  selectedItem={selectedSourceWalletItem}
                  onSelectedItem={handleSelectSourceWallet}
                  placeholder="Carteira origem"
                  testID="source-wallet-dropdown"
                />
              </View>

              <View style={styles.arrowContainer}>
                <ChevronRightIcon size={24} color="#666" />
              </View>

              <View style={styles.dropdownContainer}>
                <Text
                  type={TextType.textSmallRegular}
                  style={styles.dropdownLabel}
                >
                  Para
                </Text>
                <SelectionDropdown
                  items={walletItems}
                  selectedItem={selectedDestinationWalletItem}
                  onSelectedItem={handleSelectDestinationWallet}
                  placeholder="Carteira destino"
                  testID="destination-wallet-dropdown"
                />
              </View>
            </View>
          </View>
        )}

        <View>
          <Button
            type={ButtonType.primary}
            text="Continuar"
            onPress={onConfirm}
            isDisabled={
              !amount ||
              (showWalletSection &&
                (!selectedSourceWallet || !selectedDestinationWallet))
            }
            testID="btn-confirm"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AmountContainer;
