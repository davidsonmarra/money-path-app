import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, ButtonType, Header, Input} from 'src/components';
import useStyles from 'src/features/add-wallet/screens/name/ui/styles';

interface Props {
  name?: string;
  onBack: () => void;
  setName: (value: string) => void;
  onConfirm: () => void;
}

const NameContainer = ({name = '', onBack, setName, onConfirm}: Props) => {
  const styles = useStyles();

  return (
    <>
      <Header text="Nome" onLeftIconPress={onBack} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView edges={['bottom']} style={styles.container}>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Nome da carteira"
              testID="input-name"
            />
            <Button
              type={ButtonType.primary}
              text="Criar carteira"
              onPress={onConfirm}
              isDisabled={!name}
              testID="btn-confirm"
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default NameContainer;
