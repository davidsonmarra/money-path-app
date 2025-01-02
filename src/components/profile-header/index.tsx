import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {Text, TextType} from 'src/components';
import useStyles from 'src/components/profile-header/styles';

interface Props extends SafeAreaViewProps {
  name: string;
  abbreviation: string;
  onPressProfileImage: () => void;
}

const ProfileHeader = ({name, abbreviation, onPressProfileImage}: Props) => {
  const style = useStyles();

  return (
    <SafeAreaView style={style.container} edges={['top']}>
      <View style={style.infoContainer}>
        <Text type={TextType.text} style={style.textColor}>
          Olá,{' '}
        </Text>
        <Text type={TextType.textBold} style={style.textColor}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPressProfileImage}
        style={useStyles().profileImage}
        testID="profile-image">
        <Text type={TextType.textBold} style={useStyles().textNameAbbreviation}>
          {abbreviation}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileHeader;
