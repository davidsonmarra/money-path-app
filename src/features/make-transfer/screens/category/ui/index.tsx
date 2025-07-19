import React from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  ButtonType,
  Header,
  IconRound,
  Spacer,
  Text,
  TextType,
} from 'src/components';
import useStyles from './styles';
import Category from 'src/@types/category';
import { Status } from 'src/features/make-transfer/screens/category';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  selectedCategoryId?: string;
  onBack: () => void;
  setCategory: (value: string) => void;
  onConfirm: () => void;
  categories: Category[];
  status: Status;
}

const CategoryContainer = ({
  selectedCategoryId = '',
  onBack,
  setCategory,
  onConfirm,
  categories,
  status,
}: Props) => {
  const { colors } = useTheme().theme;
  const styles = useStyles();

  const renderDefault = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView edges={['bottom']} style={styles.container}>
          <View>
            <Text type={TextType.headingMedium}>Selecione uma categoria</Text>
            <Spacer height={12} />
            <Text type={TextType.textMediumRegular}>
              Para criar uma transferência, precisamos que você selecione uma
              categoria ou crie uma nova:
            </Text>
          </View>
          <View style={styles.categoriesContainer}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryItem,
                  selectedCategoryId !== category.id &&
                    styles.categoryItemDisabled,
                ]}
                onPress={() => setCategory(category.id)}
              >
                <IconRound
                  icon={category.icon}
                  backgroundColor={category.backgroundColor}
                  color={category.color}
                  size={40}
                  roundSize={64}
                />
                <Spacer height={8} />
                <Text
                  type={TextType.textMediumRegular}
                  style={styles.categoryName}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Button
              type={ButtonType.primary}
              text="Continuar"
              onPress={onConfirm}
              isDisabled={!selectedCategoryId}
              testID="btn-confirm"
            />
            <Spacer height={8} />
            <Button
              type={ButtonType.secondary}
              text="Criar nova categoria"
              onPress={() => {}}
              testID="btn-create-category"
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          testID="loading-spinner"
        />
      </View>
    );
  };

  const renderError = () => {
    return (
      <View>
        <Text type={TextType.textMediumRegular}>
          Erro ao carregar categorias
        </Text>
      </View>
    );
  };

  return (
    <>
      <Header text="Categoria" onLeftIconPress={onBack} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        {{
          loading: renderLoading,
          default: renderDefault,
          error: renderError,
        }[status]()}
      </KeyboardAvoidingView>
    </>
  );
};

export default CategoryContainer;
