import React from 'react';
import {screen, render, fireEvent, waitFor, act} from 'src/configs/test-utils';
import AddWalletFormContext from 'src/features/add-wallet/context/add-wallet-form';
import FeedbackScreen from 'src/features/add-wallet/screens/feedback';

const mockNavigation = {
  reset: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

const mockCreateWallet = jest.fn();
jest.mock('src/features/add-wallet/service', () => ({
  createWallet: (props: any) => mockCreateWallet(props),
}));

jest.useFakeTimers();

describe('FeedbackScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should reset stack when back button is pressed', async () => {
    render(<FeedbackScreen />);

    await waitFor(() => {
      jest.runAllTimers();
    });

    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();

    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{name: 'HomeStack'}],
    });
  });

  describe('when state is default', () => {
    it('should transition to default state after successful wallet creation', async () => {
      mockCreateWallet.mockResolvedValueOnce({});

      render(
        <AddWalletFormContext
          initialValues={{
            backgroundColor: '#2A5C99',
            color: '#EAC43D',
            icon: 'wallet',
            name: 'Carteira',
            type: 'personal',
          }}>
          <FeedbackScreen />
        </AddWalletFormContext>,
      );

      await act(async () => {
        await waitFor(() => {
          expect(mockCreateWallet).toHaveBeenCalledTimes(1);
        });
      });

      await waitFor(() => {
        const button = screen.getByText('Voltar para a tela inicial');
        expect(button).toBeTruthy();
        fireEvent.press(button);
      });

      expect(mockNavigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{name: 'HomeStack'}],
      });
    });
  });

  describe('when state is loading', () => {
    it('should show loading spinner', async () => {
      mockCreateWallet.mockImplementationOnce(() => new Promise(() => {}));

      render(
        <AddWalletFormContext
          initialValues={{
            backgroundColor: '#2A5C99',
            color: '#EAC43D',
            icon: 'wallet',
            name: 'Carteira',
            type: 'personal',
          }}>
          <FeedbackScreen />
        </AddWalletFormContext>,
      );

      const spinner = screen.getByTestId('loading-spinner');
      expect(spinner).toBeTruthy();
    });
  });

  describe('when state is error', () => {
    it('should retry wallet creation when button is pressed', async () => {
      mockCreateWallet.mockRejectedValueOnce({});

      render(
        <AddWalletFormContext
          initialValues={{
            backgroundColor: '#2A5C99',
            color: '#EAC43D',
            icon: 'wallet',
            name: 'Carteira',
            type: 'personal',
          }}>
          <FeedbackScreen />
        </AddWalletFormContext>,
      );

      await act(async () => {
        await waitFor(() => {
          expect(mockCreateWallet).toHaveBeenCalledTimes(1);
        });
      });

      await waitFor(() => {
        const button = screen.getByText('Tentar novamente');
        expect(button).toBeTruthy();
        fireEvent.press(button);
      });

      expect(mockCreateWallet).toHaveBeenCalledTimes(2);
    });
  });
});
