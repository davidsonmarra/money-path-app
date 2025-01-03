import React from 'react';
import {screen, render} from 'src/configs/test-utils';
import SelectInstitutionScreen from 'src/features/add-wallet/screens/select-institution';

const mockNavigation = {
  goBack: jest.fn(),
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
});
