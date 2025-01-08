import React from 'react';
import {Platform, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextType, Spacer} from 'src/components';
import {MoneyPathIcon} from 'src/assets/icons';
import {AppleButton, GoogleButton} from 'src/features/login/components';
import useStyles from 'src/features/login/screens/login/ui/styles';

interface Props {
  loginWithGoogle: () => void;
  loginWithApple: () => void;
}

const renderButtonsAndroid = (loginWithGoogle: () => void) => (
  <GoogleButton onPress={loginWithGoogle} />
);

const renderButtonsIOS = (
  loginWithApple: () => void,
  loginWithGoogle: () => void,
) => (
  <>
    <AppleButton onPress={loginWithApple} />
    <Spacer height={8} />
    <GoogleButton onPress={loginWithGoogle} />
  </>
);

const LoginContainer = ({loginWithApple, loginWithGoogle}: Props) => {
  return (
    <SafeAreaView style={useStyles().container}>
      <View style={useStyles().logoContainer}>
        <MoneyPathIcon size={72} />
      </View>
      <Text type={TextType.textMediumRegular}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vestibulum, urna nec lacinia. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec vestibulum, urna nec lacinia.
      </Text>
      <View>
        {Platform.select({
          ios: renderButtonsIOS(loginWithApple, loginWithGoogle),
          android: renderButtonsAndroid(loginWithGoogle),
        })}
      </View>
    </SafeAreaView>
  );
};

export default LoginContainer;
