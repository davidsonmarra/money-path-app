import React from 'react';
import {View, ViewProps} from 'react-native';
import getStyles from 'src/features/login/ui/styles';

const StorybookView = ({children, style}: ViewProps) => {
  return <View style={[getStyles().container, style]}>{children}</View>;
};

export default StorybookView;
