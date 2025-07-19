import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconRound, StorybookView } from 'src/components';
import { IconType } from 'src/assets/icons/types';

const IconRoundMeta: Meta<typeof IconRound> = {
  title: 'Components/IconRound',
  component: IconRound,
  args: {
    icon: IconType.wallet,
    backgroundColor: '#2A5C99',
    size: 32,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default IconRoundMeta;

export const Default: StoryObj<typeof IconRound> = {};

export const WithCustomColor: StoryObj<typeof IconRound> = {
  args: {
    icon: IconType.bank,
    backgroundColor: '#FF6A00',
    color: '#FFFFFF',
  },
};

export const SmallSize: StoryObj<typeof IconRound> = {
  args: {
    icon: IconType.money,
    backgroundColor: '#820AD1',
    size: 24,
  },
};

export const LargeSize: StoryObj<typeof IconRound> = {
  args: {
    icon: IconType.nubank,
    backgroundColor: '#EA1D25',
    size: 48,
  },
};

export const SmallRoundSize: StoryObj<typeof IconRound> = {
  args: {
    icon: IconType.wallet,
    backgroundColor: '#2A5C99',
    roundSize: 32,
    size: 16,
  },
};

export const LargeRoundSize: StoryObj<typeof IconRound> = {
  args: {
    icon: IconType.bank,
    backgroundColor: '#FF6A00',
    roundSize: 80,
    size: 40,
  },
};

export const DifferentRoundSizes: StoryObj<typeof IconRound> = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <IconRound
        icon={IconType.wallet}
        backgroundColor="#2A5C99"
        roundSize={32}
        size={16}
      />
      <IconRound
        icon={IconType.bank}
        backgroundColor="#FF6A00"
        roundSize={48}
        size={24}
      />
      <IconRound
        icon={IconType.money}
        backgroundColor="#820AD1"
        roundSize={64}
        size={32}
      />
      <IconRound
        icon={IconType.nubank}
        backgroundColor="#EA1D25"
        roundSize={80}
        size={40}
      />
    </div>
  ),
};

export const DifferentIcons: StoryObj<typeof IconRound> = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconRound icon={IconType.wallet} backgroundColor="#2A5C99" />
      <IconRound icon={IconType.bank} backgroundColor="#FF6A00" />
      <IconRound icon={IconType.money} backgroundColor="#820AD1" />
      <IconRound icon={IconType.nubank} backgroundColor="#EA1D25" />
      <IconRound icon={IconType.santander} backgroundColor="#EA7100" />
    </div>
  ),
};
