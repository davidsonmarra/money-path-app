import React from 'react';
import {mockGoogleSignIn} from 'src/__mocks__';
import {screen, render} from 'src/configs/test-utils';
import LoginScreen from 'src/features/login/screens/login';
import {useAuthStore} from 'src/hooks/useAuth';

jest.mock('src/hooks/useAuth', () => ({
  useAuthStore: jest.fn(),
}));

const mockLoginWithGoogle = jest.fn();
const mockLoginWithApple = jest.fn();

(useAuthStore as unknown as jest.Mock).mockImplementation(() => ({
  loginWithGoogle: mockLoginWithGoogle,
  loginWithApple: mockLoginWithApple,
}));

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the login screen', () => {
    render(<LoginScreen />);
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum, urna nec lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum, urna nec lacinia.',
      ),
    ).toBeTruthy();
  });

  describe('google button', () => {
    it('should render the login screen with google button', () => {
      render(<LoginScreen />);
      expect(screen.getByText('Entrar com Google')).toBeTruthy();
    });

    it('should call loginWithGoogle when google button is pressed', async () => {
      const {getByTestId} = render(<LoginScreen />);
      const googleButton = getByTestId('btn-google');
      await googleButton.props.onClick();
      expect(mockLoginWithGoogle).toHaveBeenCalled();
    });
  });

  describe('apple button', () => {
    it('should render the login screen with apple button', () => {
      render(<LoginScreen />);
      expect(screen.getByText('Entrar com Apple')).toBeTruthy();
    });
  });
});
