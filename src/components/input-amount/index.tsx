import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import useStyles from 'src/components/input-amount/styles';
import { useTheme } from 'src/hooks/useTheme';

export interface Props extends Omit<TextInputProps, 'onChangeText'> {
  value?: string;
  onChangeText?: (value: string) => void;
}

const InputAmount = ({ value, onChangeText, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme().theme;
  const styles = useStyles();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => setIsFocused(false);

  const handleChangeText = (text: string) => {
    if (!onChangeText) return;

    // Remove todos os caracteres não numéricos
    const numericValue = text.replace(/\D/g, '');

    // Limita a 10 dígitos (máximo de 999.999.999,99)
    const limitedValue = numericValue.slice(0, 10);

    onChangeText(limitedValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
        placeholderTextColor={colors.placeholder}
        keyboardType="numeric"
        value={`R$ ${value}`}
        onChangeText={handleChangeText}
        selectTextOnFocus={true}
        {...rest}
      />
    </View>
  );
};

export default InputAmount;
