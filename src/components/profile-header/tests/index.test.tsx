import React from 'react';
import {render} from 'src/configs/test-utils';
import {ProfileHeader} from 'src/components';

const renderComponent = ({name = '', abbreviation = ''}) =>
  render(<ProfileHeader name={name} abbreviation={abbreviation} />);

describe('ProfileHeader', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders name correctly', () => {
    const name = 'John Doe';
    const profileHeader = renderComponent({name});
    expect(profileHeader.findByText(name)).toBeTruthy();
  });

  it('renders abbreviation correctly', () => {
    const abbreviation = 'JD';
    const profileHeader = renderComponent({abbreviation});
    expect(profileHeader.findByText(abbreviation)).toBeTruthy();
  });
});
