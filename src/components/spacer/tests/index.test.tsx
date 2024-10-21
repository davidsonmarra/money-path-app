import React from 'react';
import {render} from '@testing-library/react-native';
import Spacer from 'src/components/spacer';

describe('Spacer', () => {
  it('renders correctly with default props', () => {
    const {toJSON} = render(<Spacer />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with specified width', () => {
    const {getByTestId} = render(<Spacer width={10} />);
    const spacer = getByTestId('spacer');
    expect(spacer.props.style).toEqual({width: 10, height: 0});
  });

  it('renders with specified height', () => {
    const {getByTestId} = render(<Spacer height={20} />);
    const spacer = getByTestId('spacer');
    expect(spacer.props.style).toEqual({width: 0, height: 20});
  });

  it('renders with specified width and height', () => {
    const {getByTestId} = render(<Spacer width={10} height={20} />);
    const spacer = getByTestId('spacer');
    expect(spacer.props.style).toEqual({width: 10, height: 20});
  });

  it('renders with zero width and height when props are not provided', () => {
    const {getByTestId} = render(<Spacer />);
    const spacer = getByTestId('spacer');
    expect(spacer.props.style).toEqual({width: 0, height: 0});
  });
});
