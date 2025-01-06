import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import NameContainer from 'src/features/add-wallet/screens/name/ui';

const NameContainerMeta: Meta<typeof NameContainer> = {
  title: 'Screens/AddWallet/Name',
  component: NameContainer,
  decorators: [Story => <Story />],
  args: {
    name: 'Carteira',
    setName: action('onPress setName'),
    onBack: action('onPress onBack'),
    onConfirm: action('onPress onConfirm'),
  },
  argTypes: {},
};

export default NameContainerMeta;

export const Default: StoryObj<typeof NameContainerMeta> = {};
