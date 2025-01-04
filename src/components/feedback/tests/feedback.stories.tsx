import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Feedback, FeedbackType, StorybookView} from 'src/components';

const FeedbackMeta: Meta<typeof Feedback> = {
  title: 'Components/Feedback',
  component: Feedback,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    title: 'Feedback Title',
    description: 'Feedback Description',
    buttonText: 'Feedback Button',
    type: FeedbackType.success,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default FeedbackMeta;

export const Success: StoryObj<typeof Feedback> = {};

export const Error: StoryObj<typeof Feedback> = {
  args: {
    type: FeedbackType.error,
  },
};

export const Warning: StoryObj<typeof Feedback> = {
  args: {
    type: FeedbackType.warning,
  },
};
