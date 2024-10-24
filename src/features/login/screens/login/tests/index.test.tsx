import React from 'react';
import {screen, render} from 'src/configs/test-utils';
import LoginScreen from 'src/features/login/screens/login';

describe('LoginScreen', () => {
  it('should render the login screen', () => {
    render(<LoginScreen />);
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum, urna nec lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum, urna nec lacinia.',
      ),
    ).toBeTruthy();
  });

  it('should render the login screen with google button', () => {
    render(<LoginScreen />);
    expect(screen.getByText('Entrar com Google')).toBeTruthy();
  });

  it('should render the login screen with apple button', () => {
    render(<LoginScreen />);
    expect(screen.getByText('Entrar com Apple')).toBeTruthy();
  });
});
