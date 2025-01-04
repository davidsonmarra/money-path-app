import React, {useState} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import useStyles from 'src/components/input/styles';

export interface Props extends TextInputProps {
  disabled?: boolean;
}

const Input = ({disabled = true, ...rest}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const styles = useStyles({disabled, isFocused});

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <TextInput
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={styles.container}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      {...rest}
    />
  );
};

export default Input;
