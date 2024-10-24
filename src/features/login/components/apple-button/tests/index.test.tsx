import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Button from 'src/features/login/components/apple-button';

interface Props {
  onPress?: () => void;
}

const mockText = 'Entrar com Apple';

const renderComponent = ({onPress}: Props) =>
  render(<Button onPress={onPress} />);

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    renderComponent({});
    const button = screen.getByText(mockText);
    expect(button.children).toEqual([mockText]);
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const button = renderComponent({onPress}).root;
    button.props.onClick();
    expect(onPress).toHaveBeenCalled();
  });
});
