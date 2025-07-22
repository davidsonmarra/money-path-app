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
  TextArea,
} from 'src/components';
import useStyles from './styles';

interface Props {
  title?: string;
  description?: string;
  onBack: () => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onConfirm: () => void;
  isDisabled: boolean;
}

const TitleContainer = ({
  title = '',
  description = '',
  onBack,
  setTitle,
  setDescription,
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
              <Spacer height={16} />
              <Text type={TextType.textMediumRegular}>
                Descrição (opcional):
              </Text>
              <Spacer height={8} />
              <TextArea
                placeholder="Ex: Pagamento da conta de luz do mês de dezembro"
                value={description}
                onChangeText={setDescription}
                testID="input-description"
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
