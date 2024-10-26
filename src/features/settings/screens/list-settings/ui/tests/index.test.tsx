import React from 'react';
import {render} from 'src/configs/test-utils';
import ListSettingsContainer from 'src/features/settings/screens/list-settings/ui';

const containerInstance = ({...props}) =>
  render(<ListSettingsContainer {...props} />);

describe('LoginContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });
});
