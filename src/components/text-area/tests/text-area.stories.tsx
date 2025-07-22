import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, StorybookView, Text, TextType } from 'src/components';

const TextAreaMeta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    controls: {
      matchers: {
        color: false,
      },
    },
  },
  argTypes: {
    onChangeText: { action: 'on change text' },
  },
  args: {
    placeholder: 'Digite sua descrição aqui...',
    disabled: false,
  },
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default TextAreaMeta;

export const Default: StoryObj<typeof TextArea> = {};

export const Disabled: StoryObj<typeof TextArea> = {
  args: {
    disabled: true,
  },
};

export const WithValue: StoryObj<typeof TextArea> = {
  args: {
    value: 'Esta é uma descrição de exemplo para a transferência.',
  },
};

export const WithLongText: StoryObj<typeof TextArea> = {
  args: {
    value:
      'Esta é uma descrição muito longa para testar como o componente TextArea se comporta com textos extensos. O componente deve se expandir adequadamente para acomodar todo o conteúdo.',
  },
};

export const WithSuffix: StoryObj<typeof TextArea> = {
  args: {
    suffix: (
      <Text type={TextType.textMediumSemiBold} style={{ marginHorizontal: 4 }}>
        📝
      </Text>
    ),
  },
};
