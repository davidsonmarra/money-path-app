import React from 'react';
import {View} from 'react-native';
import {Text, TextType} from 'src/components';

export interface Props {
  label: string;
  value: string;
}

const ContentDisplay = ({label, value}: Props) => {
  return (
    <View>
      <Text type={TextType.text}>{label}</Text>
      <Text type={TextType.text}>{value}</Text>
    </View>
  );
};

export default ContentDisplay;
