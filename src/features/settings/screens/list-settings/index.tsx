import React from 'react';
import ListSettingsContainer from 'src/features/settings/screens/list-settings/ui';
import {useTheme} from 'src/hooks/useTheme';
import {useAuthStore} from 'src/hooks/useAuth';

const ListSettingsScreen = () => {
  const {toggleTheme} = useTheme();
  const {logout} = useAuthStore();

  return <ListSettingsContainer logout={logout} toggleTheme={toggleTheme} />;
};

export default ListSettingsScreen;
