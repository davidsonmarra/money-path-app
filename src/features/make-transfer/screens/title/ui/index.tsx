import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  ButtonType,
  Header,
  Input,
  Spacer,
  Text,
  TextType,
} from 'src/components';
import useStyles from './styles';

interface Props {
  title?: string;
  onBack: () => void;
  setTitle: (value: string) => void;
  onConfirm: () => void;
  isDisabled: boolean;
}

const TitleContainer = ({
  title = '',
  onBack,
  setTitle,
  onConfirm,
  isDisabled,
}: Props) => {
  const styles = useStyles();

  return (
    <>
      <Header text="Título" onLeftIconPress={onBack} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView edges={['bottom']} style={styles.container}>
            <View>
              <Text type={TextType.headingMedium}>Digite o título</Text>
              <Spacer height={12} />
              <Text type={TextType.textMediumRegular}>
                Para criar uma transferência, precisamos que você digite um
                título para identificá-la:
              </Text>
              <Spacer height={24} />
              <Input
                placeholder="Ex: Pagamento da conta de luz"
                value={title}
                onChangeText={setTitle}
                testID="input-title"
              />
            </View>
            <View>
              <Button
                type={ButtonType.primary}
                text="Continuar"
                onPress={onConfirm}
                isDisabled={isDisabled}
                testID="btn-confirm"
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default TitleContainer;
