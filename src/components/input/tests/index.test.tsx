import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Input, {Props as InputProps} from 'src/components/input';

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
    const input = renderComponent({value: 'value'}).root;
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
    const input = renderComponent({
      value: mockValue,
      onChangeText: mockOnChangeText,
    }).root;
    input.props.onChangeText('new value');
    expect(input.props.value).toBe('new value');
  });
});
