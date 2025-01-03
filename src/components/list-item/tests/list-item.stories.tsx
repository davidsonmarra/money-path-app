import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ListItem, StorybookView} from 'src/components';
import {IconType} from 'src/assets/icons/types';

const ListItemMeta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'List Item',
    icon: IconType.wallet,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default ListItemMeta;

export const Default: StoryObj<typeof ListItem> = {};
