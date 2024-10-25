import React from 'react';
import {render} from 'src/configs/test-utils';
import {ProfileHeader} from 'src/components';

const mockOnPressProfileImage = jest.fn();
const renderComponent = ({
  name = '',
  abbreviation = '',
  onPressProfileImage = mockOnPressProfileImage,
}) =>
  render(
    <ProfileHeader
      name={name}
      abbreviation={abbreviation}
      onPressProfileImage={mockOnPressProfileImage}
    />,
  );

describe('ProfileHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('calls onPressProfileImage correctly', () => {
    const profileHeader = renderComponent({});
    profileHeader.getByTestId('profile-image').props.onClick();
    expect(mockOnPressProfileImage).toHaveBeenCalledTimes(1);
  });
});
