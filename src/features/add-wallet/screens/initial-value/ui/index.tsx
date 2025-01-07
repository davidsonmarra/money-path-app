import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'src/hooks/useTheme';
import {Button, ButtonType, Header, Input} from 'src/components';
import {IconType} from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';
import useStyles from 'src/features/add-wallet/screens/initial-value/ui/styles';

export interface Props {
  value?: string;
  onBack: () => void;
  setValue: (value: string) => void;
  onConfirm: () => void;
}

const InitialValueContainer = ({value, onBack, setValue, onConfirm}: Props) => {
  const {colors} = useTheme().theme;
  const styles = useStyles();

  return (
    <>
      <Header text="Valor Inicial" onLeftIconPress={onBack} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView edges={['bottom']} style={styles.container}>
            <Input
              value={value}
              onChangeText={setValue}
              placeholder="0,00"
              suffix={renderIcon(IconType.money)({
                color: colors.title,
                size: 24,
              })}
              testID="input-name"
              keyboardType="numeric"
            />
            <Button
              type={ButtonType.primary}
              text="Criar carteira"
              onPress={onConfirm}
              testID="btn-confirm"
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default InitialValueContainer;
