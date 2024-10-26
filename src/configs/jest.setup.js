import '@testing-library/react-native/extend-expect';

jest.useFakeTimers();

const mockTheme = {
  colors: {
    background: '#232E38',
    primary: '#EAC43D',
    secondary: '#2A5C99',
    info: '#14C0CC',
    success: '#A6CD4E',
    title: '#FFF',
    text: '#D9D9D9',
    disabled: '#4F4F4F',
    buttonText: '#FFF',
  },
};

jest.mock('src/hooks/theme', () => ({
  useTheme: () => ({
    theme: mockTheme,
    dark: true,
  }),
}));
