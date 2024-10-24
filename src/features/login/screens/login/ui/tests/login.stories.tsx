import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import LoginContainer from 'src/features/login/screens/login/ui';

const LoginContainerMeta: Meta<typeof LoginContainer> = {
  title: 'Screens/Login',
  component: LoginContainer,
  decorators: [Story => <Story />],
  args: {
    loginWithApple: action('onPress loginWithApple'),
    loginWithGoogle: action('onPress loginWithGoogle'),
  },
};

export default LoginContainerMeta;

export const Default: StoryObj<typeof LoginContainer> = {};
