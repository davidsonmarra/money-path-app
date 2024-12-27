import React from 'react';
import {firebase} from '@react-native-firebase/auth';
import ListSettingsContainer from 'src/features/settings/screens/list-settings/ui';

const ListSettingsScreen = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return <ListSettingsContainer logout={handleLogout} />;
};

export default ListSettingsScreen;
