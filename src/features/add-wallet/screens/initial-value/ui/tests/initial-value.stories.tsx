import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import InitialValueContainer from 'src/features/add-wallet/screens/initial-value/ui';

const InitialValueContainerMeta: Meta<typeof InitialValueContainer> = {
  title: 'Screens/AddWallet/InitialValue',
  component: InitialValueContainer,
  decorators: [Story => <Story />],
  args: {
    value: undefined,
    setValue: action('onPress setValue'),
    onBack: action('onPress onBack'),
    onConfirm: action('onPress onConfirm'),
  },
  argTypes: {},
};

export default InitialValueContainerMeta;

export const Default: StoryObj<typeof InitialValueContainerMeta> = {};
