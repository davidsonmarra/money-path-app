import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Feedback, FeedbackType} from 'src/components';
import {fireEvent, render} from 'src/configs/test-utils';
import FeedbackContainer, {
  States,
} from 'src/features/add-wallet/screens/feedback/ui';

let mockState = States.loading;
const mockOnClose = jest.fn();
const mockOnPress = jest.fn();
const containerInstance = ({state = mockState}) =>
  render(
    <FeedbackContainer
      state={state}
      onClose={mockOnClose}
      onPress={mockOnPress}
    />,
  );

describe('FeedbackContainer', () => {
  beforeEach(() => {
    mockState = States.loading;
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({state: States.default}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call onBackPress', () => {
    const container = containerInstance({});
    container.getByTestId('btn-left-icon').props.onClick();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  describe('when state is default', () => {
    it('should call onPress', () => {
      const container = containerInstance({state: States.default});
      const button = container.getByText('Voltar para a tela inicial');
      fireEvent.press(button);
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should render success state correctly', () => {
      const container = containerInstance({state: States.default}).root;
      const feedback = container.findAllByType(Feedback);
      expect(feedback[0].props.type).toBe(FeedbackType.success);
    });
  });

  describe('when state is error', () => {
    it('should call onPress', () => {
      const container = containerInstance({state: States.error});
      const button = container.getByText('Tentar novamente');
      fireEvent.press(button);
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('should render error state correctly', () => {
      const container = containerInstance({state: States.error}).root;
      const feedback = container.findAllByType(Feedback);
      expect(feedback[0].props.type).toBe(FeedbackType.error);
    });
  });

  describe('when state is loading', () => {
    it('should render loading state correctly', () => {
      const container = containerInstance({state: States.loading}).root;
      const feedback = container.findAllByType(ActivityIndicator);
      expect(feedback[0]).toBeTruthy();
    });
  });
});
