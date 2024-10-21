import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView} from 'src/components';
import AppleButton from 'src/features/login/components/apple-button';

const ButtonMeta: Meta<typeof AppleButton> = {
  title: 'Screens/Login/Components/AppleButton',
  component: AppleButton,
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

export const Default: StoryObj<typeof AppleButton> = {};
