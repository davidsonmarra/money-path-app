import React from 'react';
import {View} from 'react-native';
import {Text, TextType} from 'src/components';

export interface Props {
  label: string;
  description?: string;
  thirdLine?: string;
}

const ContentSimple = ({label, description, thirdLine}: Props) => {
  return (
    <View>
      <Text type={TextType.text}>{label}</Text>
      {description && <Text type={TextType.text}>{description}</Text>}
      {thirdLine && <Text type={TextType.text}>{thirdLine}</Text>}
    </View>
  );
};

export default ContentSimple;
