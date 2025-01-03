import React from 'react';
import {render, screen} from 'src/configs/test-utils';
import ListItem, {Props as ListItemProps} from 'src/components/list-item';
import {IconType} from 'src/assets/icons/types';
import {WalletIcon} from 'src/assets/icons';

const mockText = 'Snapshot test!';
const mockIcon = IconType.wallet;
const renderComponent = ({
  text = mockText,
  icon = mockIcon,
  ...rest
}: Partial<ListItemProps>) =>
  render(<ListItem text={text} icon={icon} {...rest} />);

describe('ListItem', () => {
  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    renderComponent({});
    const headerText = screen.getByText(mockText);
    expect(headerText.children).toEqual([mockText]);
  });

  it('renders icon correctly', () => {
    renderComponent({});
    const icon = screen.getByTestId('icon-wallet');
    expect(icon).toBeTruthy();

    renderComponent({icon: IconType.inter});
    const newIcon = screen.getByTestId('icon-inter');
    expect(newIcon).toBeTruthy();
  });

  it('calls onPress correctly', () => {
    const onPress = jest.fn();
    renderComponent({onPress, testID: 'list-item-container'});
    const container = screen.getByTestId('list-item-container');
    container.props.onClick();
    expect(onPress).toHaveBeenCalled();
  });
});
