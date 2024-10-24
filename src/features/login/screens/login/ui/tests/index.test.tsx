import React from 'react';
import {render} from 'src/configs/test-utils';
import {AppleButton, GoogleButton} from 'src/features/login/components';
import LoginContainer from 'src/features/login/screens/login/ui';

const containerInstance = (props: any) => render(<LoginContainer {...props} />);

describe('LoginContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call loginWithGoogle', () => {
    const loginWithGoogle = jest.fn();
    const container = containerInstance({loginWithGoogle}).root;
    container.findByType(GoogleButton).props.onPress();
    expect(loginWithGoogle).toHaveBeenCalled();
  });

  it('should call loginWithApple', () => {
    const loginWithApple = jest.fn();
    const container = containerInstance({loginWithApple}).root;
    container.findByType(AppleButton).props.onPress();
    expect(loginWithApple).toHaveBeenCalled();
  });
});
