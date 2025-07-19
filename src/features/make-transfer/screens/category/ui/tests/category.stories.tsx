import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CategoryContainer from 'src/features/make-transfer/screens/category/ui';
import { IconType } from 'src/assets/icons/types';
import Category from 'src/@types/category';

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Alimentação',
    backgroundColor: '#FF6B35',
    color: '#FFFFFF',
    icon: IconType.food,
  },
  {
    id: '2',
    name: 'Transporte',
    backgroundColor: '#4A90E2',
    color: '#FFFFFF',
    icon: IconType.transport,
  },
  {
    id: '3',
    name: 'Casa',
    backgroundColor: '#8B4513',
    color: '#FFFFFF',
    icon: IconType.house,
  },
  {
    id: '4',
    name: 'Lazer',
    backgroundColor: '#9C27B0',
    color: '#FFFFFF',
    icon: IconType.games,
  },
  {
    id: '5',
    name: 'Saúde',
    backgroundColor: '#E91E63',
    color: '#FFFFFF',
    icon: IconType.health,
  },
  {
    id: '6',
    name: 'Outros',
    backgroundColor: '#607D8B',
    color: '#FFFFFF',
    icon: IconType.help,
  },
];

const CategoryContainerMeta: Meta<typeof CategoryContainer> = {
  title: 'Screens/MakeTransfer/Category',
  component: CategoryContainer,
  decorators: [Story => <Story />],
  argTypes: {
    onBack: { control: false },
    setCategory: { control: false },
    onConfirm: { control: false },
    categories: { control: false },
  },
  args: {
    onBack: action('onPress onBack'),
    setCategory: action('onPress setCategory'),
    onConfirm: action('onPress onConfirm'),
    categories: mockCategories,
    status: 'default',
    selectedCategoryId: '',
  },
};

export default CategoryContainerMeta;

export const Default: StoryObj<typeof CategoryContainer> = {};

export const WithSelectedCategory: StoryObj<typeof CategoryContainer> = {
  args: {
    selectedCategoryId: '1',
  },
};

export const Loading: StoryObj<typeof CategoryContainer> = {
  args: {
    status: 'loading',
  },
};

export const Error: StoryObj<typeof CategoryContainer> = {
  args: {
    status: 'error',
  },
};

export const EmptyCategories: StoryObj<typeof CategoryContainer> = {
  args: {
    categories: [],
  },
};
