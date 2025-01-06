import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import FeedbackContainer, {
  States,
} from 'src/features/add-wallet/screens/feedback/ui';

const FeedbackContainerMeta: Meta<typeof FeedbackContainer> = {
  title: 'Screens/AddWallet/Feedback',
  component: FeedbackContainer,
  decorators: [Story => <Story />],
  args: {
    state: States.default,
    onClose: action('onPress onClose'),
    onPress: action('onPress onPress'),
  },
  argTypes: {},
};

export default FeedbackContainerMeta;

export const Default: StoryObj<typeof FeedbackContainerMeta> = {};

export const Error: StoryObj<typeof FeedbackContainerMeta> = {
  args: {
    state: States.error,
  },
};

export const Loading: StoryObj<typeof FeedbackContainerMeta> = {
  args: {
    state: States.loading,
  },
};
