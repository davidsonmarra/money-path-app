import React, {ReactElement} from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {IconType} from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';
import useStyles from 'src/components/list-item/styles';
import {useTheme} from 'src/hooks/useTheme';
import ContentSimple, {
  Props as ContentSimpleProps,
} from 'src/components/list-item/sub-components/contents/content-simple';
import ContentDisplay, {
  Props as ContentDisplayProps,
} from 'src/components/list-item/sub-components/contents/content-display';

export interface Props extends TouchableOpacityProps {
  navigationIndicator?: boolean;
  leading?: ReactElement;
  trailing?: ReactElement;
  content:
    | ReactElement
    | (ContentSimpleProps & {type: 'simple'})
    | (ContentDisplayProps & {type: 'display'});
}

const ListItem = ({
  leading,
  trailing,
  content,
  navigationIndicator,
  testID,
  onPress,
}: Props) => {
  const styles = useStyles({});
  const {colors} = useTheme().theme;

  const renderNavigationIndicator = () => {
    return (
      <View>
        {renderIcon(IconType.chevronRight)({
          color: colors.navigationIndicator,
          size: 24,
        })}
      </View>
    );
  };

  const renderLeading = (element: ReactElement) => (
    <View style={styles.leadingContainer}>{element}</View>
  );

  const renderTrailing = (element: ReactElement) => (
    <View style={styles.trailingContainer}>{element}</View>
  );

  const renderContent = (element: Props['content']) => {
    const contentMap: {[key: string]: () => ReactElement} = {
      simple: () => <ContentSimple {...(element as ContentSimpleProps)} />,
      display: () => <ContentDisplay {...(element as ContentDisplayProps)} />,
    };
    const renderingElement = React.isValidElement(element)
      ? element
      : contentMap[element.type as string]();

    return <View style={styles.contentContainer}>{renderingElement}</View>;
  };

  const renderChildren = () => (
    <>
      {leading && renderLeading(leading)}
      {renderContent(content)}
      {trailing && renderTrailing(trailing)}
      {navigationIndicator && onPress && renderNavigationIndicator()}
    </>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} style={styles.main} testID={testID}>
      {renderChildren()}
    </TouchableOpacity>
  ) : (
    <View style={styles.main}>{renderChildren()}</View>
  );
};

export default ListItem;
