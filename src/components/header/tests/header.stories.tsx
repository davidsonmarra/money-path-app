import React from 'react';
import type {Meta} from '@storybook/react';
import {StorybookView, Header} from 'src/components';

const HeaderMeta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    onLeftIconPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Header Title',
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default HeaderMeta;
