import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonType, StorybookView} from 'src/components';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Button Primary',
    type: ButtonType.primary,
    isLoading: false,
    isDisabled: false,
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

export const Primary: StoryObj<typeof Button> = {};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    isDisabled: true,
  },
};

export const PrimaryWithLoading: StoryObj<typeof Button> = {
  args: {
    isLoading: true,
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    text: 'Button Secondary',
    type: ButtonType.secondary,
  },
};
