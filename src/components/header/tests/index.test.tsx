import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Header, {Props as HeaderProps} from 'src/components/header';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({top: 0}),
}));

const mockText = 'Snapshot test!';
const renderComponent = ({text = mockText, ...rest}: HeaderProps) =>
  render(<Header text={text} {...rest} />);

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    renderComponent({});
    const headerText = screen.getByText(mockText);
    expect(headerText.children).toEqual([mockText]);
  });

  it('should call onLeftIconPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = renderComponent({onLeftIconPress: onPress});
    const leftIcon = getByTestId('btn-left-icon');
    leftIcon.props.onClick();
    expect(onPress).toHaveBeenCalled();
  });
});
