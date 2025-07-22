import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TypeScreen from '../index';

// Mock das dependências
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

jest.mock('src/features/make-transfer/hooks/make-transfer-form', () => ({
  __esModule: true,
  default: () => ({
    watch: jest.fn(() => ''),
    setValue: jest.fn(),
  }),
}));

describe('TypeScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<TypeScreen />);

    expect(getByText('Selecione o tipo')).toBeTruthy();
    expect(getByText('Despesa')).toBeTruthy();
    expect(getByText('Receita')).toBeTruthy();
    expect(getByText('Transferência entre carteiras')).toBeTruthy();
  });

  it('should have continue button disabled initially', () => {
    const { getByTestId } = render(<TypeScreen />);

    const continueButton = getByTestId('btn-confirm');
    expect(continueButton.props.accessibilityState.disabled).toBe(true);
  });
});
