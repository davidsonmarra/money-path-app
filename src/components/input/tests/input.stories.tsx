import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Input, StorybookView} from 'src/components';

const InputMeta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChangeText: {action: 'on change text'},
  },
  args: {
    placeholder: 'Input Text',
    disabled: false,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default InputMeta;

export const Default: StoryObj<typeof Input> = {};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
  },
};
