import '@testing-library/react-native/extend-expect';
import { mockGoogleSignIn } from 'src/__mocks__';
import dark from 'src/configs/theme/colors/dark';

jest.useFakeTimers();

const mockTheme = {
  colors: dark,
};

jest.mock('src/hooks/useTheme', () => ({
  useTheme: () => ({
    theme: mockTheme,
    dark: true,
  }),
}));

jest.mock('@react-native-firebase/auth', () => ({
  firebase: {
    auth: () => ({
      signInWithCredential: jest.fn(),
      signOut: jest.fn(),
    }),
  },
  GoogleAuthProvider: {
    credential: jest.fn(),
  },
}));

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: mockGoogleSignIn,
}));

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: jest.fn(() => ({ top: 0, bottom: 0, left: 0, right: 0 })),
}));

jest.mock('react-native-date-picker', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  return function MockDatePicker({ date, onDateChange, ...props }) {
    return React.createElement(
      View,
      {
        testID: 'date-picker',
        onPress: () => onDateChange && onDateChange(new Date()),
        ...props,
      },
      React.createElement(Text, {}, 'DatePicker Mock'),
    );
  };
});

jest.mock('react-native-modal', () => {
  const React = require('react');
  const { View } = require('react-native');

  return function MockModal({
    isVisible,
    children,
    onBackdropPress,
    onBackButtonPress,
    ...props
  }) {
    if (!isVisible) return null;

    return React.createElement(
      View,
      {
        testID: 'modal',
        onPress: onBackdropPress,
        ...props,
      },
      children,
    );
  };
});
