import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Divider, {
  DividerType,
  DividerSize,
  Props as DividerProps,
} from 'src/components/divider';

const renderComponent = ({
  type = DividerType.horizontal,
  size = DividerSize.medium,
  ...rest
}: Partial<DividerProps>) =>
  render(<Divider type={type} size={size} {...rest} />);

describe('Divider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Horizontal', () => {
    it('renders horizontal divider', () => {
      const divider = renderComponent({type: DividerType.horizontal}).root;
      expect(divider.props.style.width).toBe('100%');
    });

    it('renders small horizontal divider', () => {
      const divider = renderComponent({size: DividerSize.small}).root;
      expect(divider.props.style.height).toBe(1);
    });

    it('renders medium horizontal divider', () => {
      const divider = renderComponent({size: DividerSize.medium}).root;
      expect(divider.props.style.height).toBe(2.5);
    });

    it('renders large horizontal divider', () => {
      const divider = renderComponent({size: DividerSize.large}).root;
      expect(divider.props.style.height).toBe(5);
    });
  });

  describe('Vertical', () => {
    it('renders vertical divider', () => {
      const divider = renderComponent({type: DividerType.vertical}).root;
      expect(divider.props.style.height).toBe('100%');
    });

    it('renders small vertical divider', () => {
      const divider = renderComponent({
        type: DividerType.vertical,
        size: DividerSize.small,
      }).root;
      expect(divider.props.style.width).toBe(1);
    });

    it('renders medium vertical divider', () => {
      const divider = renderComponent({
        type: DividerType.vertical,
        size: DividerSize.medium,
      }).root;
      expect(divider.props.style.width).toBe(2.5);
    });

    it('renders large vertical divider', () => {
      const divider = renderComponent({
        type: DividerType.vertical,
        size: DividerSize.large,
      }).root;
      expect(divider.props.style.width).toBe(5);
    });
  });
});
