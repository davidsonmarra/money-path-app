import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {StorybookView, Text, TextType} from 'src/components';

const TextMeta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    type: TextType.textSmallRegular,
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

export const TestSmallRegular: StoryObj<typeof Text> = {};

export const TestSmallSemiBold: StoryObj<typeof Text> = {
  args: {
    type: TextType.textSmallSemiBold,
  },
};

export const TestSmallHyperlink: StoryObj<typeof Text> = {
  args: {
    type: TextType.textSmallHyperlink,
  },
};

export const TestSmallOverline: StoryObj<typeof Text> = {
  args: {
    type: TextType.textSmallOverline,
  },
};

export const TestMediumRegular: StoryObj<typeof Text> = {
  args: {
    type: TextType.textMediumRegular,
  },
};

export const TestMediumSemiBold: StoryObj<typeof Text> = {
  args: {
    type: TextType.textMediumSemiBold,
  },
};

export const TestMediumHyperlink: StoryObj<typeof Text> = {
  args: {
    type: TextType.textMediumHyperlink,
  },
};

export const TestMediumOverline: StoryObj<typeof Text> = {
  args: {
    type: TextType.textMediumOverline,
  },
};

export const TestLargeRegular: StoryObj<typeof Text> = {
  args: {
    type: TextType.textLargeRegular,
  },
};

export const TestLargeSemiBold: StoryObj<typeof Text> = {
  args: {
    type: TextType.textLargeSemiBold,
  },
};

export const TestLargeHyperlink: StoryObj<typeof Text> = {
  args: {
    type: TextType.textLargeHyperlink,
  },
};

export const TestLargeOverline: StoryObj<typeof Text> = {
  args: {
    type: TextType.textLargeOverline,
  },
};

export const TestHeadingXSmall: StoryObj<typeof Text> = {
  args: {
    type: TextType.headingXSmall,
  },
};

export const TestHeadingSmall: StoryObj<typeof Text> = {
  args: {
    type: TextType.headingSmall,
  },
};

export const TestHeadingMedium: StoryObj<typeof Text> = {
  args: {
    type: TextType.headingMedium,
  },
};

export const TestHeadingLarge: StoryObj<typeof Text> = {
  args: {
    type: TextType.headingLarge,
  },
};
