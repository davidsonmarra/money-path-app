import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ProfileHeader, StorybookView} from 'src/components';

const ProfileHeaderMeta: Meta<typeof ProfileHeader> = {
  title: 'Components/ProfileHeader',
  component: ProfileHeader,
  args: {
    name: 'John Doe',
    abbreviation: 'JD',
  },
  decorators: [
    Story => (
      <StorybookView
        style={{
          paddingHorizontal: 0,
        }}>
        <Story />
      </StorybookView>
    ),
  ],
};

export default ProfileHeaderMeta;

export const Default: StoryObj<typeof ProfileHeader> = {};
