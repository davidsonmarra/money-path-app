import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileHeader} from 'src/components';
import getStyles from 'src/features/home/screens/home/ui/styles';

const HomeContainer = () => {
  return (
    <>
      <ProfileHeader name="Deyverson" abbreviation="DY" />
      <SafeAreaView style={getStyles().container}></SafeAreaView>
    </>
  );
};

export default HomeContainer;
