import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Text, {TextType} from 'src/components/text';
import getStyles from 'src/components/text/styles';

const mockText = 'Snapshot test!';
const renderComponent = (type: TextType = TextType.title) =>
  render(<Text type={type}>{mockText}</Text>);

describe('Text', () => {
  it('renders correctly', () => {
    const tree = renderComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    renderComponent();
    const text = screen.getByRole('text');
    expect(text.children).toEqual([mockText]);
  });

  it('renders title style correctly', () => {
    renderComponent(TextType.title);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().title);
  });

  it('renders text style correctly', () => {
    renderComponent(TextType.text);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().text);
  });

  it('renders textBold style correctly', () => {
    renderComponent(TextType.textBold);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().textBold);
  });

  it('renders buttonPrimary style correctly', () => {
    renderComponent(TextType.buttonPrimary);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().buttonPrimary);
  });

  it('renders buttonSecondary style correctly', () => {
    renderComponent(TextType.buttonSecondary);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().buttonSecondary);
  });

  it('renders header style correctly', () => {
    renderComponent(TextType.header);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().header);
  });
});
