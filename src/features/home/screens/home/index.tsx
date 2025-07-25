import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeContainer from 'src/features/home/screens/home/ui';
import { PrivateStackParamList } from '../../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from 'src/hooks/useAuth';

type HomeScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'HomeStack'
>;

const HomeScreen = () => {
  const { user, token } = useAuthStore();
  console.log('user', user);
  console.log('token', token);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigateToSettings = () => {
    navigation.navigate('MakeTransferStack', {
      screen: 'Category',
    });
  };

  return <HomeContainer onPressProfileImage={handleNavigateToSettings} />;
};

export default HomeScreen;
