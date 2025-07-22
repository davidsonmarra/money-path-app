import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TitleContainer from 'src/features/make-transfer/screens/title/ui';

const TitleContainerMeta: Meta<typeof TitleContainer> = {
  title: 'Screens/MakeTransfer/Title',
  component: TitleContainer,
  decorators: [Story => <Story />],
  parameters: {
    controls: {
      matchers: {
        color: false,
      },
    },
  },
  argTypes: {
    onBack: { control: false },
    setTitle: { control: false },
    setDescription: { control: false },
    onConfirm: { control: false },
  },
  args: {
    onBack: action('onPress onBack'),
    setTitle: action('onChange setTitle'),
    setDescription: action('onChange setDescription'),
    onConfirm: action('onPress onConfirm'),
    title: '',
    description: '',
    isDisabled: false,
  },
};

export default TitleContainerMeta;

export const Default: StoryObj<typeof TitleContainer> = {};

export const WithTitle: StoryObj<typeof TitleContainer> = {
  args: {
    title: 'Pagamento da conta de luz',
  },
};

export const WithDescription: StoryObj<typeof TitleContainer> = {
  args: {
    title: 'Pagamento da conta de luz',
    description: 'Pagamento da conta de luz do mês de dezembro de 2024',
  },
};

export const WithLongDescription: StoryObj<typeof TitleContainer> = {
  args: {
    title: 'Transferência para pagamento',
    description:
      'Esta é uma descrição muito longa para testar como o componente se comporta com textos extensos. A descrição deve ser opcional e não deve afetar a validação do formulário.',
  },
};
