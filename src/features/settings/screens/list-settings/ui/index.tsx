import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextType} from 'src/components';
import useStyles from 'src/features/settings/screens/list-settings/ui/styles';

interface Props {
  logout: () => void;
  toggleTheme: () => void;
}

const ListSettingsContainer = ({logout, toggleTheme}: Props) => {
  return (
    <SafeAreaView style={useStyles().container}>
      <Text type={TextType.textBold}>List Settings</Text>
      <TouchableOpacity onPress={logout}>
        <Text type={TextType.textBold}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTheme}>
        <Text type={TextType.textBold}>Toggle Theme</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListSettingsContainer;
