import React from 'react';
import {View} from 'react-native';
import {Text, TextType} from 'src/components';
import useStyles from 'src/components/list-item/sub-components/contents/content-simple/styles';

export interface Props {
  label: string;
  description?: string;
  thirdLine?: string;
}

const ContentSimple = ({label, description, thirdLine}: Props) => {
  const styles = useStyles();

  return (
    <View>
      <Text type={TextType.textMediumMedium}>{label}</Text>
      {description && (
        <Text type={TextType.textSmallRegular} style={styles.descriptionColor}>
          {description}
        </Text>
      )}
      {thirdLine && (
        <Text type={TextType.textSmallRegular} style={styles.descriptionColor}>
          {thirdLine}
        </Text>
      )}
    </View>
  );
};

export default ContentSimple;
