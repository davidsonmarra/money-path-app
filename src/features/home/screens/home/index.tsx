import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeContainer from 'src/features/home/screens/home/ui';
import {PrivateStackParamList} from '../../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'HomeStack'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigateToSettings = () => {
    navigation.navigate('SettingsStack', {
      screen: 'ListSettingsScreen',
    });
  };

  return <HomeContainer onPressProfileImage={handleNavigateToSettings} />;
};

export default HomeScreen;
