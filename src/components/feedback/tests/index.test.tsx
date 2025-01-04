import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Feedback, {
  FeedbackType,
  Props as FeedbackProps,
} from 'src/components/feedback';

const mockTitle = 'title';
const mockButtonText = 'buttonText';
const mockOnPress = jest.fn();
const renderComponent = ({
  title = mockTitle,
  buttonText = mockButtonText,
  onPress = mockOnPress,
  ...rest
}: Partial<FeedbackProps>) =>
  render(
    <Feedback
      title={title}
      buttonText={buttonText}
      onPress={onPress}
      {...rest}
    />,
  );

describe('Feedback', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders title', () => {
    renderComponent({});
    expect(screen.getByText(mockTitle)).toBeTruthy();
  });

  it('renders button text', () => {
    renderComponent({});
    expect(screen.getByText(mockButtonText)).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    renderComponent({});
    fireEvent.press(screen.getByText(mockButtonText));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders description', () => {
    const mockDescription = 'description';
    renderComponent({description: mockDescription});
    expect(screen.getByText(mockDescription)).toBeTruthy();
  });

  it('renders success feedback', () => {
    renderComponent({type: FeedbackType.success});
    expect(screen.getByTestId('icon-check')).toBeTruthy();
  });

  it('renders error feedback', () => {
    renderComponent({type: FeedbackType.error});
    expect(screen.getByTestId('icon-error')).toBeTruthy();
  });

  it('renders warning feedback', () => {
    renderComponent({type: FeedbackType.warning});
    expect(screen.getByTestId('icon-warning')).toBeTruthy();
  });
});
