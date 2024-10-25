import React from 'react';
import {screen, render} from 'src/configs/test-utils';
import HomeScreen from 'src/features/home/screens/home';

const mockNavigation = {
  navigate: jest.fn(),
};
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => mockNavigation),
}));

describe('HomeScreen', () => {
  it('should call navigate when profile image is pressed', () => {
    render(<HomeScreen />);
    const profileImage = screen.getByTestId('profile-image');
    profileImage.props.onClick();
    expect(mockNavigation.navigate).toHaveBeenCalledWith('SettingsStack', {
      screen: 'ListSettingsScreen',
    });
  });
});
