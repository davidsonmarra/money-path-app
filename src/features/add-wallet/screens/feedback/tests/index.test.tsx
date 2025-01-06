import React from 'react';
import {screen, render, fireEvent, waitFor} from 'src/configs/test-utils';
import FeedbackScreen from 'src/features/add-wallet/screens/feedback';

const mockNavigation = {
  reset: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

let mockInstitution = {
  backgroundColor: '#2A5C99',
  color: '#EAC43D',
  icon: 'wallet',
  name: 'Wallet Name',
  type: 'personal',
};

jest.mock('src/features/add-wallet/hooks/use-add-wallet-form', () => () => ({
  institution: mockInstitution,
}));

jest.useFakeTimers();

describe('FeedbackScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should reset stack when back button is pressed', () => {
    render(<FeedbackScreen />);
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{name: 'HomeStack'}],
    });
  });

  describe('when state is default', () => {
    it('should call backToHome when button is pressed', async () => {
      render(<FeedbackScreen />);

      await waitFor(() => {
        jest.runAllTimers();
      });

      const button = screen.getByText('Voltar para a tela inicial');
      fireEvent.press(button);

      expect(mockNavigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{name: 'HomeStack'}],
      });
    });
  });

  describe('when state is loading', () => {
    it('should show loading spinner', async () => {
      render(<FeedbackScreen />);

      const spinner = screen.getByTestId('loading-spinner');
      expect(spinner).toBeTruthy();
    });
  });

  // TODO: implement test when api is available
  // describe('when state is error', () => {
  //   it('should call crateWallet when button is pressed', async () => {
  //     render(<FeedbackScreen />);

  //     await waitFor(() => {
  //       jest.runAllTimers();
  //     });

  //     const button = screen.getByText('Tentar novamente');
  //     fireEvent.press(button);

  //     expect(mockNavigation.reset).not.toHaveBeenCalled();
  //   });
  // });
});
