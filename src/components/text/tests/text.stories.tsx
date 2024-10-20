import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView, Text, TextType} from 'src/components';

const TextMeta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    type: TextType.title,
    children: 'Sample Text',
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default TextMeta;

export const Title: StoryObj<typeof Text> = {};

export const TextDefault: StoryObj<typeof Text> = {
  args: {
    type: TextType.text,
  },
};

export const TextBold: StoryObj<typeof Text> = {
  args: {
    type: TextType.textBold,
  },
};

export const ButtonPrimary: StoryObj<typeof Text> = {
  args: {
    type: TextType.buttonPrimary,
  },
};

export const ButtonSecondary: StoryObj<typeof Text> = {
  args: {
    type: TextType.buttonSecondary,
  },
};
