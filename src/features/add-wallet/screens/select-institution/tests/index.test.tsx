import React from 'react';
import {screen, render, fireEvent} from 'src/configs/test-utils';
import SelectInstitutionScreen from 'src/features/add-wallet/screens/select-institution';

const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

describe('SelectInstitutionScreen', () => {
  it('should go back when back button is pressed', () => {
    render(<SelectInstitutionScreen />);
    const backButton = screen.getByTestId('btn-left-icon');
    backButton.props.onClick();
    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should navigate correctly when an personal institution is selected', () => {
    render(<SelectInstitutionScreen />);
    const institution = screen.getByText('Carteira');
    fireEvent.press(institution);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'SelectColor',
    });
  });

  it('should navigate correctly when an bank institution is selected', () => {
    render(<SelectInstitutionScreen />);
    const institution = screen.getByText('Inter');
    fireEvent.press(institution);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('AddWalletStack', {
      screen: 'Name',
    });
  });
});
