import React from 'react';
import {screen, render, fireEvent} from 'src/configs/test-utils';
import SelectColorScreen from 'src/features/add-wallet/screens/select-color';

const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

let mockInstitution = {
  backgroundColor: '#2A5C99',
  color: '#EAC43D',
  icon: 'wallet',
  name: 'Carteira',
  type: 'personal',
};
const mockSetInstitution = jest.fn().mockImplementation(institution => {
  mockInstitution = institution;
});
jest.mock('src/features/add-wallet/hooks/use-add-wallet-form', () => () => ({
  institution: mockInstitution,
  setInstitution: mockSetInstitution,
}));

describe('SelectColorScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should go back when back button is pressed', () => {
    render(<SelectColorScreen />);
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should navigate correctly when an confirm', () => {
    render(<SelectColorScreen />);
    const institution = screen.getByText('Continuar');
    fireEvent.press(institution);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'Name',
    });
  });

  it('should select color correctly', () => {
    render(<SelectColorScreen />);
    const colorButton = screen.getByTestId('btn-color-#EE82EE');
    fireEvent.press(colorButton);
    expect(mockSetInstitution).toHaveBeenCalledWith(mockInstitution);
  });
});
