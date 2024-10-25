import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileHeader} from 'src/components';
import getStyles from 'src/features/home/screens/home/ui/styles';

interface Props {
  onPressProfileImage: () => void;
}

const HomeContainer = ({onPressProfileImage}: Props) => {
  return (
    <>
      <ProfileHeader
        name="Deyverson"
        abbreviation="DY"
        onPressProfileImage={onPressProfileImage}
      />
      <SafeAreaView style={getStyles().container}></SafeAreaView>
    </>
  );
};

export default HomeContainer;
