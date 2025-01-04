import React from 'react';
import {View} from 'react-native';
import {IconType} from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';
import {Button, ButtonType, Text, TextType} from 'src/components';
import useStyles from 'src/components/feedback/styles';
import {useTheme} from 'src/hooks/useTheme';

export enum FeedbackType {
  success = 'success',
  error = 'error',
  warning = 'warning',
}

export interface Props {
  type?: FeedbackType;
  title: string;
  description?: string;
  buttonText: string;
  onPress: () => void;
}

const Feedback = ({
  type = FeedbackType.success,
  title,
  description,
  buttonText,
  onPress,
}: Props) => {
  const {colors} = useTheme().theme;
  const styles = useStyles({});

  const renderIconFeedback = (type: FeedbackType) =>
    ({
      [FeedbackType.success]: (
        <View style={[styles.feedbackIconWrapper, styles.successWrapper]}>
          {renderIcon(IconType.check)({size: 100, color: colors.success})}
        </View>
      ),
      [FeedbackType.error]: (
        <View style={[styles.feedbackIconWrapper, styles.errorWrapper]}>
          {renderIcon(IconType.error)({size: 100, color: colors.error})}
        </View>
      ),
      [FeedbackType.warning]: (
        <View style={[styles.feedbackIconWrapper, styles.warningWrapper]}>
          {renderIcon(IconType.warning)({size: 100, color: colors.warning})}
        </View>
      ),
    }[type]);

  return (
    <View style={styles.container}>
      <View />
      <View style={styles.infoWrapper}>
        {renderIconFeedback(type)}
        <Text type={TextType.title} style={styles.text}>
          {title}
        </Text>
        <Text type={TextType.text} style={styles.text}>
          {description}
        </Text>
      </View>
      <Button type={ButtonType.primary} text={buttonText} onPress={onPress} />
    </View>
  );
};

export default Feedback;
