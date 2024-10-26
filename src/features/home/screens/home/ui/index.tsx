import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileHeader} from 'src/components';
import useStyles from 'src/features/home/screens/home/ui/styles';

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
      <SafeAreaView style={useStyles().container}></SafeAreaView>
    </>
  );
};

export default HomeContainer;
