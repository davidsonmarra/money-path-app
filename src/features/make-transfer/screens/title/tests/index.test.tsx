import React from 'react';
import { fireEvent, render } from 'src/configs/test-utils';
import TitleScreen from 'src/features/make-transfer/screens/title';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: mockNavigate,
  }),
}));

describe('TitleScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    const screen = render(<TitleScreen />).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should pass correct props to TitleContainer', () => {
    const { getByText, getByTestId } = render(<TitleScreen />);

    expect(getByText('Digite o título')).toBeTruthy();
    expect(getByText('Descrição (opcional):')).toBeTruthy();
    expect(getByTestId('input-title')).toBeTruthy();
    expect(getByTestId('input-description')).toBeTruthy();
    expect(getByTestId('btn-confirm')).toBeTruthy();
  });

  it('should navigate to AddWalletStack when onConfirm is called', () => {
    const { getByTestId } = render(<TitleScreen />);

    const input = getByTestId('input-title');
    const confirmButton = getByTestId('btn-confirm');

    fireEvent.changeText(input, 'Teste de título');
    fireEvent.press(confirmButton);

    expect(mockNavigate).toHaveBeenCalledWith('MakeTransferStack', {
      screen: 'Type',
    });
  });

  it('should disable confirm button when title is empty', () => {
    const { getByTestId } = render(<TitleScreen />);

    const confirmButton = getByTestId('btn-confirm');
    expect(confirmButton.props.accessibilityState.disabled).toBe(true);
  });

  it('should enable confirm button when title is not empty', () => {
    const { getByTestId } = render(<TitleScreen />);

    const input = getByTestId('input-title');
    const confirmButton = getByTestId('btn-confirm');

    fireEvent.changeText(input, 'Teste de título');

    expect(confirmButton.props.accessibilityState.disabled).toBe(false);
  });
});
