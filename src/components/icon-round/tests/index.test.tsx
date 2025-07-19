import React from 'react';
import { render } from '@testing-library/react-native';
import IconRound, { Props as IconRoundProps } from 'src/components/icon-round';
import getStyles from 'src/components/icon-round/styles';
import { IconType } from 'src/assets/icons/types';

type Props = Partial<IconRoundProps>;

const mockIcon = IconType.wallet;
const renderComponent = ({ icon = mockIcon, ...rest }: Props) =>
  render(<IconRound icon={icon} {...rest} />);

describe('IconRound', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with default props correctly', () => {
    const iconRound = renderComponent({}).root;
    expect(iconRound.props.style).toStrictEqual([
      getStyles({}).container,
      { backgroundColor: undefined },
    ]);
  });

  it('renders with custom backgroundColor correctly', () => {
    const backgroundColor = '#FF0000';
    const iconRound = renderComponent({ backgroundColor }).root;
    expect(iconRound.props.style).toStrictEqual([
      getStyles({}).container,
      { backgroundColor },
    ]);
  });

  it('renders with custom size correctly', () => {
    const size = 24;
    renderComponent({ size });
    expect(renderComponent({ size })).toBeTruthy();
  });

  it('renders with custom color correctly', () => {
    const color = '#00FF00';
    renderComponent({ color });
    expect(renderComponent({ color })).toBeTruthy();
  });

  it('renders with different icon types correctly', () => {
    const iconTypes = [IconType.bank, IconType.money, IconType.wallet];

    iconTypes.forEach(iconType => {
      const tree = renderComponent({ icon: iconType }).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders with default roundSize correctly', () => {
    const iconRound = renderComponent({}).root;
    expect(iconRound.props.style).toStrictEqual([
      getStyles({}).container,
      { backgroundColor: undefined },
    ]);
  });

  it('renders with custom roundSize correctly', () => {
    const roundSize = 64;
    const iconRound = renderComponent({ roundSize }).root;
    expect(iconRound.props.style).toStrictEqual([
      getStyles({ roundSize }).container,
      { backgroundColor: undefined },
    ]);
  });

  it('renders with small roundSize correctly', () => {
    const roundSize = 24;
    const iconRound = renderComponent({ roundSize }).root;
    expect(iconRound.props.style).toStrictEqual([
      getStyles({ roundSize }).container,
      { backgroundColor: undefined },
    ]);
  });

  it('renders with large roundSize correctly', () => {
    const roundSize = 96;
    const iconRound = renderComponent({ roundSize }).root;
    expect(iconRound.props.style).toStrictEqual([
      getStyles({ roundSize }).container,
      { backgroundColor: undefined },
    ]);
  });
});
