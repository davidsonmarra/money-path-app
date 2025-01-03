import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SelectInstitutionContainer from 'src/features/add-wallet/screens/select-institution/ui';

const SelectInstitutionContainerMeta: Meta<typeof SelectInstitutionContainer> =
  {
    title: 'Screens/AddWallet/SelectInstitution',
    component: SelectInstitutionContainer,
    decorators: [Story => <Story />],
    args: {
      onBack: action('onPress onBack'),
    },
  };

export default SelectInstitutionContainerMeta;

export const Default: StoryObj<typeof SelectInstitutionContainer> = {};
