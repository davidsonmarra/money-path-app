import React, {useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import useStyles from 'src/components/input/styles';
import {useTheme} from 'src/hooks/useTheme';

export interface Props extends TextInputProps {
  suffix?: React.ReactNode;
  disabled?: boolean;
}

const Input = ({disabled = false, suffix, ...rest}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const {colors} = useTheme().theme;
  const styles = useStyles({disabled, isFocused, hasSuffix: !!suffix});

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      {suffix && <View style={styles.suffixContainer}>{suffix}</View>}
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        placeholderTextColor={colors.placeholder}
        {...rest}
      />
    </View>
  );
};

export default Input;
