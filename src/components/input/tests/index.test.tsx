import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Input, {Props as InputProps} from 'src/components/input';
import {Text} from 'react-native';

const renderComponent = ({...rest}: InputProps) => render(<Input {...rest} />);

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders placeholder correctly', () => {
    renderComponent({placeholder: 'placeholder'});
    expect(screen.getByPlaceholderText('placeholder')).toBeTruthy();
  });

  it('renders value correctly', () => {
    const {getByPlaceholderText} = renderComponent({
      value: 'value',
      placeholder: 'placeholder',
    });
    const input = getByPlaceholderText('placeholder');
    expect(input.props.value).toBe('value');
  });

  it('renders disabled correctly', () => {
    const input = renderComponent({disabled: true}).root;
    expect(input.props.editable).toBeFalsy();
    expect(input.props.selectTextOnFocus).toBeFalsy();
  });

  it('should update input value', () => {
    let mockValue = 'new value';
    const mockOnChangeText = (value: string) => (mockValue = value);
    const {getByPlaceholderText} = renderComponent({
      value: mockValue,
      onChangeText: mockOnChangeText,
      placeholder: 'placeholder',
    });
    const input = getByPlaceholderText('placeholder');
    input.props.onChangeText('new value');
    expect(input.props.value).toBe('new value');
  });

  it('should render suffix correctly', () => {
    renderComponent({
      suffix: <Text>Suffix</Text>,
    });
    expect(screen.getByText('Suffix')).toBeTruthy();
  });
});
