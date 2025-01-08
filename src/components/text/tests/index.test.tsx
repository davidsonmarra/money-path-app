import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Text, {TextType} from 'src/components/text';
import getStyles from 'src/components/text/styles';

const mockText = 'Snapshot test!';
const renderComponent = (type: TextType = TextType.textSmallRegular) =>
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

  it('renders textSmallRegular style correctly', () => {
    renderComponent(TextType.textSmallRegular);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().small);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().regular);
  });

  it('renders textSmallMedium style correctly', () => {
    renderComponent(TextType.textSmallMedium);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().small);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().mediumW);
  });

  it('renders textSmallSemiBold style correctly', () => {
    renderComponent(TextType.textSmallSemiBold);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().small);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().semiBold);
  });

  it('renders textSmallHyperlink style correctly', () => {
    renderComponent(TextType.textSmallHyperlink);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().small);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().hyperlink);
  });

  it('renders textSmallOverline style correctly', () => {
    renderComponent(TextType.textSmallOverline);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().small);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().overline);
  });

  it('renders textMediumRegular style correctly', () => {
    renderComponent(TextType.textMediumRegular);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().medium);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().regular);
  });

  it('renders textMediumMediumstyle correctly', () => {
    renderComponent(TextType.textMediumMedium);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().medium);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().mediumW);
  });

  it('renders textMediumSemiBold style correctly', () => {
    renderComponent(TextType.textMediumSemiBold);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().medium);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().semiBold);
  });

  it('renders textMediumHyperlink style correctly', () => {
    renderComponent(TextType.textMediumHyperlink);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().medium);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().hyperlink);
  });

  it('renders textMediumOverline style correctly', () => {
    renderComponent(TextType.textMediumOverline);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().medium);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().overline);
  });

  it('renders textLargeRegular style correctly', () => {
    renderComponent(TextType.textLargeRegular);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().large);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().regular);
  });

  it('renders textLargeMedium style correctly', () => {
    renderComponent(TextType.textLargeMedium);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().large);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().mediumW);
  });

  it('renders textLargeSemiBold style correctly', () => {
    renderComponent(TextType.textLargeSemiBold);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().large);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().semiBold);
  });

  it('renders textLargeHyperlink style correctly', () => {
    renderComponent(TextType.textLargeHyperlink);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().large);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().hyperlink);
  });

  it('renders textLargeOverline style correctly', () => {
    renderComponent(TextType.textLargeOverline);
    const text = screen.getByRole('text');
    expect(text.props.style[0][0]).toStrictEqual(getStyles().large);
    expect(text.props.style[0][1]).toStrictEqual(getStyles().overline);
  });

  it('renders headingXSmall style correctly', () => {
    renderComponent(TextType.headingXSmall);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().headingXSmall);
  });

  it('renders headingSmall style correctly', () => {
    renderComponent(TextType.headingSmall);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().headingSmall);
  });

  it('renders headingMedium style correctly', () => {
    renderComponent(TextType.headingMedium);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().headingMedium);
  });

  it('renders headingLarge style correctly', () => {
    renderComponent(TextType.headingLarge);
    const text = screen.getByRole('text');
    expect(text.props.style[0]).toStrictEqual(getStyles().headingLarge);
  });
});
