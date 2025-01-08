import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text, {TextType} from 'src/components/text';
import {BackIcon} from 'src/assets/icons';
import useStyles from 'src/components/header/styles';

interface renderIconProps {
  color?: string;
}

export interface Props {
  text?: string;
  renderLeftIcon?: (props?: renderIconProps) => React.ReactNode;
  onLeftIconPress?: () => void;
}

const Header = ({
  text = '',
  renderLeftIcon = props => <BackIcon {...props} />,
  onLeftIconPress,
}: Props) => {
  const insets = useSafeAreaInsets();
  const style = useStyles({insetTop: insets.top});

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onLeftIconPress} testID="btn-left-icon">
        {renderLeftIcon({
          color: style.textColor.color,
        })}
      </TouchableOpacity>
      <Text type={TextType.headingXSmall} style={style.textColor}>
        {text}
      </Text>
      <View />
    </View>
  );
};

export default Header;
