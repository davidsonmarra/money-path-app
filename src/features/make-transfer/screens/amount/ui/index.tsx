import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import {
  BottomSheet,
  Button,
  ButtonType,
  Header,
  IconRound,
  InputAmount,
  SelectionDropdown,
  Spacer,
  Text,
  TextType,
} from 'src/components';
import useStyles from 'src/features/make-transfer/screens/amount/ui/styles';
import { WalletUiProps } from 'src/features/make-transfer/screens/amount';
import { SelectionDropdownItem } from 'src/components/selection-dropdown';
import { IconType } from 'src/assets/icons/types';

interface Props {
  onBack: () => void;
  onConfirm: () => void;
  amount: string;
  onChangeAmount: (value: string) => void;
  transferBeetweenWallets: boolean;
  wallets?: WalletUiProps[];
  selectedSourceWallet?: WalletUiProps;
  selectedDestinationWallet?: WalletUiProps;
  onSelectSourceWallet: (walletId: string) => void;
  onSelectDestinationWallet: (walletId: string) => void;
  onSwapWallets: () => void;
  timestamp?: Date;
  showDatePicker: boolean;
  onDateChange: (date: Date) => void;
  onOpenDatePicker: () => void;
  onCloseDatePicker: () => void;
  onConfirmDate: () => void;
  tempDate?: Date | null;
}

const AmountContainer = ({
  onBack,
  onConfirm,
  amount,
  onChangeAmount,
  transferBeetweenWallets,
  wallets = [],
  selectedSourceWallet,
  selectedDestinationWallet,
  onSelectSourceWallet,
  onSelectDestinationWallet,
  onSwapWallets,
  timestamp,
  showDatePicker,
  onDateChange,
  onOpenDatePicker,
  onCloseDatePicker,
  onConfirmDate,
  tempDate,
}: Props) => {
  const styles = useStyles();

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
        <View>
          {transferBeetweenWallets ? (
            <View>
              <Text type={TextType.headingMedium}>Selecione as carteiras</Text>
              <Spacer height={12} />
              <Text type={TextType.textMediumRegular}>
                Para criar uma transferência, precisamos que você informe a
                carteira de origem e destino:
              </Text>
              <Spacer height={16} />
              <View style={styles.walletsContainer}>
                <View>
                  <Text
                    type={TextType.textSmallRegular}
                    style={styles.dropdownLabel}
                  >
                    De
                  </Text>
                  <SelectionDropdown
                    items={wallets}
                    selectedItem={selectedSourceWallet as SelectionDropdownItem}
                    onSelectedItem={item => onSelectSourceWallet?.(item.value)}
                    placeholder="Carteira origem"
                    showIcon
                    testID="source-wallet-dropdown"
                  />
                </View>
                <TouchableOpacity
                  onPress={onSwapWallets}
                  testID="swap-wallets-button"
                >
                  <IconRound icon={IconType.change} size={56} />
                </TouchableOpacity>

                <View>
                  <Text
                    type={TextType.textSmallRegular}
                    style={styles.dropdownLabel}
                  >
                    Para
                  </Text>
                  <SelectionDropdown
                    items={wallets}
                    selectedItem={
                      selectedDestinationWallet as SelectionDropdownItem
                    }
                    onSelectedItem={item =>
                      onSelectDestinationWallet?.(item.value)
                    }
                    placeholder="Carteira destino"
                    showIcon
                    testID="destination-wallet-dropdown"
                  />
                </View>
              </View>
            </View>
          ) : (
            <View>
              <Text type={TextType.headingMedium}>Selecione a carteira</Text>
              <Spacer height={12} />
              <Text type={TextType.textMediumRegular}>
                Para criar uma transferência, precisamos que você informe a
                carteira:
              </Text>
              <Spacer height={12} />
              <View style={styles.walletContainer}>
                <SelectionDropdown
                  items={wallets}
                  selectedItem={selectedSourceWallet as SelectionDropdownItem}
                  onSelectedItem={item => onSelectSourceWallet?.(item.value)}
                  placeholder="Carteira"
                  showIcon
                  testID="source-wallet-dropdown"
                />
              </View>
            </View>
          )}
          <View style={styles.dateContainer}>
            <Text type={TextType.textMediumRegular}>
              Data e hora da transferência
            </Text>
            <Spacer height={8} />
            <TouchableOpacity
              onPress={onOpenDatePicker}
              style={styles.dateButton}
              testID="date-button"
            >
              <Text type={TextType.headingMedium} style={styles.dayText}>
                {timestamp?.toLocaleString('pt-BR', {
                  day: '2-digit',
                })}
              </Text>
              <Text type={TextType.textMediumRegular} style={styles.monthText}>
                de{' '}
                {timestamp?.toLocaleString('pt-BR', {
                  month: 'long',
                })}
              </Text>
              <Spacer height={8} />
              <Text type={TextType.textMediumRegular} style={styles.hourText}>
                {timestamp?.toLocaleString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Button
            type={ButtonType.primary}
            text="Continuar"
            onPress={onConfirm}
            testID="btn-confirm"
          />
        </View>
      </SafeAreaView>
      <BottomSheet
        isVisible={showDatePicker}
        onClose={onCloseDatePicker}
        title="Selecionar data e hora"
        maxHeight="100%"
        testID="date-picker-bottom-sheet"
      >
        <View style={styles.datePickerContainer}>
          <DatePicker
            date={tempDate || timestamp || new Date()}
            onDateChange={onDateChange}
            mode="date"
          />
        </View>
        <Spacer height={16} />
        <View style={styles.modalButtons}>
          <TouchableOpacity
            onPress={onCloseDatePicker}
            style={styles.cancelButton}
          >
            <Text type={TextType.textMediumRegular}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onConfirmDate}
            style={[
              styles.confirmButton,
              !tempDate && styles.confirmButtonDisabled,
            ]}
            disabled={!tempDate}
          >
            <Text
              type={TextType.textMediumRegular}
              style={styles.confirmButtonText}
            >
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};

export default AmountContainer;
