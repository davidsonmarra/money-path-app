import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Divider, DividerType, DividerSize, StorybookView} from 'src/components';

const DividerMeta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  args: {
    type: DividerType.horizontal,
    size: DividerSize.small,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default DividerMeta;

export const HorizontalSmall: StoryObj<typeof Divider> = {};

export const HorizontalMedium: StoryObj<typeof Divider> = {
  args: {
    size: DividerSize.medium,
  },
};

export const HorizontalLarge: StoryObj<typeof Divider> = {
  args: {
    size: DividerSize.large,
  },
};

export const VerticalSmall: StoryObj<typeof Divider> = {
  args: {
    type: DividerType.vertical,
  },
};

export const VerticalMedium: StoryObj<typeof Divider> = {
  args: {
    type: DividerType.vertical,
    size: DividerSize.medium,
  },
};

export const VerticalLarge: StoryObj<typeof Divider> = {
  args: {
    type: DividerType.vertical,
    size: DividerSize.large,
  },
};
