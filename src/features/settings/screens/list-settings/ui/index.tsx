import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextType} from 'src/components';
import useStyles from 'src/features/settings/screens/list-settings/ui/styles';

const ListSettingsContainer = () => {
  return (
    <SafeAreaView style={useStyles().container}>
      <Text type={TextType.textBold}>List Settings</Text>
    </SafeAreaView>
  );
};

export default ListSettingsContainer;
