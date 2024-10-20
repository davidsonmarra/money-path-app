import React from 'react';
import {ActivityIndicator} from 'react-native';
import {render, screen} from '@testing-library/react-native';
import Button, {ButtonType, Props as ButtonProps} from 'src/components/button';
import getStyles from 'src/components/button/styles';

type Props = Partial<ButtonProps> & {type?: string};

const mockText = 'Snapshot test!';
const renderComponent = ({text = mockText, type, ...rest}: Props) =>
  render(
    <Button text={text} type={type} {...rest}>
      {mockText}
    </Button>,
  );

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

  it('renders primary style correctly', () => {
    const button = renderComponent({type: ButtonType.primary}).root;
    expect(button.props.style).toStrictEqual({
      ...getStyles({isDisabled: false}).container,
      ...getStyles({isDisabled: false}).primary,
    });
  });

  it('renders secondary style correctly', () => {
    const button = renderComponent({type: ButtonType.secondary}).root;
    expect(button.props.style).toStrictEqual({
      ...getStyles({isDisabled: false}).container,
      ...getStyles({isDisabled: false}).secondary,
    });
  });

  it('renders primary style correctly when does not have prop type', () => {
    const button = renderComponent({type: undefined}).root;
    expect(button.props.style).toStrictEqual({
      ...getStyles({isDisabled: false}).container,
      ...getStyles({isDisabled: false}).primary,
    });
  });

  it('renders disabled style correctly when isDisabled prop is true', () => {
    const button = renderComponent({isDisabled: true}).root;
    expect(button.props.style).toStrictEqual({
      ...getStyles({isDisabled: true}).container,
      ...getStyles({isDisabled: true}).primary,
    });
  });

  it('renders loading correctly', () => {
    const button = renderComponent({isLoading: true}).root;
    const activityIndicator = button.findByType(ActivityIndicator);
    expect(activityIndicator).toBeTruthy();
  });
});
