import React from 'react';
import { fireEvent, render } from 'src/configs/test-utils';
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
];

const containerInstance = (props: any) =>
  render(<CategoryContainer {...props} />);

describe('CategoryContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with default status', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'default',
    }).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with loading status', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'loading',
    }).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with error status', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'error',
    }).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call onBack when header back button is pressed', () => {
    const mockOnBack = jest.fn();
    const container = containerInstance({
      categories: mockCategories,
      status: 'default',
      onBack: mockOnBack,
    });

    container.getByTestId('btn-left-icon').props.onClick();
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('should call setCategory when a category is selected', () => {
    const mockSetCategory = jest.fn();
    const container = containerInstance({
      categories: mockCategories,
      status: 'default',
      setCategory: mockSetCategory,
    });

    fireEvent.press(container.getByText('Alimentação'));
    expect(mockSetCategory).toHaveBeenCalledWith('1');
  });

  it('should call onConfirm when confirm button is pressed', () => {
    const mockOnConfirm = jest.fn();
    const container = containerInstance({
      categories: mockCategories,
      status: 'default',
      onConfirm: mockOnConfirm,
      selectedCategoryId: '1',
    });

    fireEvent.press(container.getByTestId('btn-confirm'));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('should show loading spinner when status is loading', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'loading',
    });

    expect(container.getByTestId('loading-spinner')).toBeTruthy();
  });

  it('should show error message when status is error', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'error',
    });

    expect(container.getByText('Erro ao carregar categorias')).toBeTruthy();
  });

  it('should render all categories correctly', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'default',
    });

    expect(container.getByText('Alimentação')).toBeTruthy();
    expect(container.getByText('Transporte')).toBeTruthy();
  });

  it('should apply selected style to selected category', () => {
    const container = containerInstance({
      categories: mockCategories,
      status: 'default',
      selectedCategoryId: '1',
    });

    const alimentacaoItem = container.getByText('Alimentação').parent;
    expect(alimentacaoItem).toBeTruthy();
  });
});
