import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from 'src/components';
import GoogleButton from 'src/features/login/components/google-button';

const ButtonMeta: Meta<typeof GoogleButton> = {
  title: 'Screens/Login/Components/GoogleButton',
  component: GoogleButton,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default ButtonMeta;

export const Default: StoryObj<typeof GoogleButton> = {};
