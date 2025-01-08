import React from 'react';
import {View} from 'react-native';
import {Text, TextType} from 'src/components';
import useStyles from 'src/components/list-item/sub-components/contents/content-display/styles';

export interface Props {
  label: string;
  value: string;
}

const ContentDisplay = ({label, value}: Props) => {
  const styles = useStyles();

  return (
    <View>
      <Text type={TextType.textSmallRegular} style={styles.descriptionColor}>
        {label}
      </Text>
      <Text type={TextType.textMediumMedium}>{value}</Text>
    </View>
  );
};

export default ContentDisplay;
