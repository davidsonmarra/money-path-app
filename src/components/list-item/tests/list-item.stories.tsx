import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ListItem, StorybookView} from 'src/components';
import {IconType} from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';

const ListItemMeta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    content: {
      type: 'simple',
      label: 'Label',
      description: 'Description',
    },
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

export const Simple: StoryObj<typeof ListItem> = {};

export const SimpleWithThirdLine: StoryObj<typeof ListItem> = {
  args: {
    content: {
      type: 'simple',
      label: 'Label',
      description: 'Description',
      thirdLine: 'Third line',
    },
  },
};

export const Display: StoryObj<typeof ListItem> = {
  args: {
    content: {
      type: 'display',
      label: 'Label',
      value: 'Value',
    },
  },
};

export const WithLeading: StoryObj<typeof ListItem> = {
  args: {
    leading: renderIcon(IconType.back)({
      color: 'red',
      size: 24,
    }),
  },
};

export const WithTrailing: StoryObj<typeof ListItem> = {
  args: {
    trailing: renderIcon(IconType.back)({
      color: 'red',
      size: 24,
    }),
  },
};

export const WithNavigationIndicator: StoryObj<typeof ListItem> = {
  args: {
    navigationIndicator: true,
  },
};
