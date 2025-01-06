import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SelectColorContainer from 'src/features/add-wallet/screens/select-color/ui';
import {IconType} from 'src/assets/icons/types';

const SelectColorContainerMeta: Meta<typeof SelectColorContainer> = {
  title: 'Screens/AddWallet/SelectColor',
  component: SelectColorContainer,
  decorators: [Story => <Story />],
  args: {
    institution: {
      icon: IconType.wallet,
      color: '#EAC43D',
      backgroundColor: '#2A5C99',
      name: 'Carteira',
      type: 'personal',
    },
    onBack: action('onPress onBack'),
    selectColor: action('onPress selectColor'),
    onConfirm: action('onPress onConfirm'),
  },
  argTypes: {},
};

export default SelectColorContainerMeta;

export const Default: StoryObj<typeof SelectColorContainer> = {};
