import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomSheet from '../index';
import { Text } from 'react-native';

const mockOnClose = jest.fn();

const defaultProps = {
  isVisible: true,
  onClose: mockOnClose,
  title: 'Test Title',
  children: <Text>Test Content</Text>,
};

describe('BottomSheet', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when visible', () => {
    const { getByText, getByTestId } = render(
      <BottomSheet {...defaultProps} testID="bottom-sheet" />,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Content')).toBeTruthy();
    expect(getByTestId('bottom-sheet')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const { queryByText } = render(
      <BottomSheet {...defaultProps} isVisible={false} />,
    );

    expect(queryByText('Test Title')).toBeNull();
    expect(queryByText('Test Content')).toBeNull();
  });

  it('calls onClose when backdrop is pressed', () => {
    const { getByTestId } = render(
      <BottomSheet {...defaultProps} testID="bottom-sheet" />,
    );

    const modal = getByTestId('bottom-sheet');
    fireEvent(modal, 'backdropPress');

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when back button is pressed', () => {
    const { getByTestId } = render(
      <BottomSheet {...defaultProps} testID="bottom-sheet" />,
    );

    const modal = getByTestId('bottom-sheet');
    fireEvent(modal, 'backButtonPress');

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders with custom maxHeight', () => {
    const { getByTestId } = render(
      <BottomSheet {...defaultProps} maxHeight="60%" testID="bottom-sheet" />,
    );

    expect(getByTestId('bottom-sheet')).toBeTruthy();
  });
});
