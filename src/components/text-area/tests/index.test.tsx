import React from 'react';
import { render, screen } from '@testing-library/react-native';
import TextArea, { Props as TextAreaProps } from 'src/components/text-area';
import { Text } from 'react-native';

const renderComponent = ({ ...rest }: TextAreaProps) =>
  render(<TextArea {...rest} />);

describe('TextArea', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders placeholder correctly', () => {
    renderComponent({ placeholder: 'placeholder' });
    expect(screen.getByPlaceholderText('placeholder')).toBeTruthy();
  });

  it('renders value correctly', () => {
    const { getByPlaceholderText } = renderComponent({
      value: 'value',
      placeholder: 'placeholder',
    });
    const textArea = getByPlaceholderText('placeholder');
    expect(textArea.props.value).toBe('value');
  });

  it('renders disabled correctly', () => {
    const textArea = renderComponent({ disabled: true }).root;
    expect(textArea.props.editable).toBeFalsy();
    expect(textArea.props.selectTextOnFocus).toBeFalsy();
  });

  it('should update text area value', () => {
    let mockValue = 'new value';
    const mockOnChangeText = (value: string) => (mockValue = value);
    const { getByPlaceholderText } = renderComponent({
      value: mockValue,
      onChangeText: mockOnChangeText,
      placeholder: 'placeholder',
    });
    const textArea = getByPlaceholderText('placeholder');
    textArea.props.onChangeText('new value');
    expect(textArea.props.value).toBe('new value');
  });

  it('should render suffix correctly', () => {
    renderComponent({
      suffix: <Text>Suffix</Text>,
    });
    expect(screen.getByText('Suffix')).toBeTruthy();
  });

  it('should have multiline enabled', () => {
    const { getByPlaceholderText } = renderComponent({
      placeholder: 'placeholder',
    });
    const textArea = getByPlaceholderText('placeholder');
    expect(textArea.props.multiline).toBe(true);
  });

  it('should have textAlignVertical set to top', () => {
    const { getByPlaceholderText } = renderComponent({
      placeholder: 'placeholder',
    });
    const textArea = getByPlaceholderText('placeholder');
    expect(textArea.props.textAlignVertical).toBe('top');
  });
});
