import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TitleContainer from 'src/features/make-transfer/screens/title/ui';

const TitleContainerMeta: Meta<typeof TitleContainer> = {
  title: 'Screens/MakeTransfer/Title',
  component: TitleContainer,
  decorators: [Story => <Story />],
  parameters: {
    controls: {
      matchers: {
        color: false,
      },
    },
  },
  argTypes: {
    onBack: { control: false },
    setTitle: { control: false },
    onConfirm: { control: false },
  },
  args: {
    onBack: action('onPress onBack'),
    setTitle: action('onChange setTitle'),
    onConfirm: action('onPress onConfirm'),
    title: '',
  },
};

export default TitleContainerMeta;

export const Default: StoryObj<typeof TitleContainer> = {};

export const WithTitle: StoryObj<typeof TitleContainer> = {
  args: {
    title: 'Pagamento da conta de luz',
  },
};
