import React from 'react';
import {render} from 'src/configs/test-utils';
import HomeContainer from 'src/features/home/screens/home/ui';

const containerInstance = (props: any) => render(<HomeContainer {...props} />);

describe('HomeContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });
});
