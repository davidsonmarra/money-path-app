import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AmountContainer from 'src/features/make-transfer/screens/amount/ui';
import { IconType } from 'src/assets/icons/types';

const mockWallets = [
  {
    id: '1',
    label: 'Carteira 1',
    icon: IconType.wallet,
    iconBackground: '#FF0000',
    type: 'wallet' as const,
    balance: 1000,
    value: '1',
  },
  {
    id: '2',
    label: 'Carteira 2',
    icon: IconType.bank,
    iconBackground: '#00FF00',
    type: 'bank' as const,
    balance: 2000,
    value: '2',
  },
];

const AmountContainerMeta: Meta<typeof AmountContainer> = {
  title: 'Screens/MakeTransfer/Amount',
  component: AmountContainer,
  decorators: [Story => <Story />],
  args: {
    onBack: action('onPress onBack'),
    onConfirm: action('onPress onConfirm'),
    amount: '0,00',
    onChangeAmount: action('onChangeAmount'),
    transferBeetweenWallets: false,
    wallets: mockWallets,
    selectedSourceWallet: mockWallets[0],
    selectedDestinationWallet: mockWallets[1],
    onSelectSourceWallet: action('onSelectSourceWallet'),
    onSelectDestinationWallet: action('onSelectDestinationWallet'),
    onSwapWallets: action('onSwapWallets'),
    timestamp: new Date(),
    showDatePicker: false,
    onDateChange: action('onDateChange'),
    onOpenDatePicker: action('onOpenDatePicker'),
    onCloseDatePicker: action('onCloseDatePicker'),
    onConfirmDate: action('onConfirmDate'),
    tempDate: null,
  },
  argTypes: {},
};

export default AmountContainerMeta;

export const Default: StoryObj<typeof AmountContainerMeta> = {};

export const WithAmount: StoryObj<typeof AmountContainerMeta> = {
  args: {
    amount: '150,00',
  },
};

export const TransferBetweenWallets: StoryObj<typeof AmountContainerMeta> = {
  args: {
    transferBeetweenWallets: true,
  },
};

export const WithDatePickerOpen: StoryObj<typeof AmountContainerMeta> = {
  args: {
    showDatePicker: true,
    tempDate: new Date(),
  },
};
