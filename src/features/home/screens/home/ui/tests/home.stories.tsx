import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import HomeContainer from 'src/features/home/screens/home/ui';

const HomeContainerMeta: Meta<typeof HomeContainer> = {
  title: 'Screens/Home',
  component: HomeContainer,
  decorators: [Story => <Story />],
  argTypes: {
    onPressProfileImage: {action: 'pressed the icon button'},
  },
};

export default HomeContainerMeta;

export const Default: StoryObj<typeof HomeContainer> = {};
