import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CloseIcon } from 'src/assets/icons';
import Feedback, { FeedbackType } from 'src/components/feedback';
import Header from 'src/components/header';
import useStyles from 'src/features/add-wallet/screens/feedback/ui/styles';
import { useTheme } from 'src/hooks/useTheme';

export enum States {
  default = 'default',
  error = 'error',
  loading = 'loading',
}

interface Props {
  state: States;
  onClose: () => void;
  onPress: () => void;
}

const FeedbackContainer = ({ state, onClose, onPress }: Props) => {
  const { colors } = useTheme().theme;
  const styles = useStyles();

  const renderLoading = () => (
    <View style={styles.containerLoading}>
      <ActivityIndicator
        size="large"
        color={colors.primary}
        testID="loading-spinner"
      />
    </View>
  );

  const renderError = () => (
    <Feedback
      type={FeedbackType.error}
      title="Ops!"
      description="Houve um erro ao criar sua carteira. Tente novamente."
      buttonText="Tentar novamente"
      onPress={onPress}
    />
  );

  const renderDefault = () => (
    <Feedback
      type={FeedbackType.success}
      title="Carteira criada!"
      description="Sua carteira foi criada com sucesso. Agora, você pode adicionar transações."
      buttonText="Voltar para a tela inicial"
      onPress={onPress}
    />
  );

  return (
    <>
      <Header
        text=""
        onLeftIconPress={onClose}
        renderLeftIcon={() => <CloseIcon />}
      />
      <SafeAreaView style={styles.container}>
        {{
          [States.default]: renderDefault,
          [States.error]: renderError,
          [States.loading]: renderLoading,
        }[state]()}
      </SafeAreaView>
    </>
  );
};

export default FeedbackContainer;
