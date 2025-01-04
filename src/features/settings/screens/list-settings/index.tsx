import React from 'react';
import {firebase} from '@react-native-firebase/auth';
import ListSettingsContainer from 'src/features/settings/screens/list-settings/ui';
import {useTheme} from 'src/hooks/useTheme';

const ListSettingsScreen = () => {
  const {toggleTheme} = useTheme();

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <ListSettingsContainer logout={handleLogout} toggleTheme={toggleTheme} />
  );
};

export default ListSettingsScreen;
