import React from 'react';
import {View} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {Text, TextType} from 'src/components';
import getStyles from 'src/components/profile-header/styles';

interface Props extends SafeAreaViewProps {
  name: string;
  abbreviation: string;
}

const ProfileHeader = ({name, abbreviation}: Props) => {
  return (
    <SafeAreaView style={getStyles().container} edges={['top']}>
      <View style={getStyles().infoContainer}>
        <Text type={TextType.text}>Olá, </Text>
        <Text type={TextType.textBold}>{name}</Text>
      </View>
      <View style={getStyles().profileImage}>
        <Text type={TextType.textBold} style={getStyles().textNameAbbreviation}>
          {abbreviation}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;
