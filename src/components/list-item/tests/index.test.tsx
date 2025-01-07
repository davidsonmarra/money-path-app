import React from 'react';
import {fireEvent, render, screen} from 'src/configs/test-utils';
import ListItem, {Props as ListItemProps} from 'src/components/list-item';
import {IconType} from 'src/assets/icons/types';
import {WalletIcon} from 'src/assets/icons';
import renderIcon from 'src/assets/icons/utils';

const mockContent: ListItemProps['content'] = {
  type: 'simple',
  label: 'Label',
  description: 'Description',
};
const renderComponent = ({
  content = mockContent,
  onPress,
  ...rest
}: Partial<ListItemProps>) =>
  render(<ListItem content={content} onPress={onPress} {...rest} />);

describe('ListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderComponent({}).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when clicked', () => {
    const mockOnPress = jest.fn();
    renderComponent({onPress: mockOnPress});
    fireEvent.press(screen.getByText(mockContent.label));
    expect(mockOnPress).toHaveBeenCalled();
  });

  describe('when content is simple', () => {
    it('renders label and description', () => {
      renderComponent({content: mockContent});
      expect(screen.getByText(mockContent.label)).toBeTruthy();
      expect(screen.getByText(mockContent.description!)).toBeTruthy();
    });

    it('renders third line if provided', () => {
      const thirdLine = 'Third line';
      renderComponent({content: {...mockContent, thirdLine}});
      expect(screen.getByText(thirdLine)).toBeTruthy();
    });
  });

  describe('when content is display', () => {
    const mockDisplayContent: ListItemProps['content'] = {
      type: 'display',
      label: 'Label',
      value: 'Value',
    };

    it('renders label and value', () => {
      renderComponent({content: mockDisplayContent});
      expect(screen.getByText(mockDisplayContent.label)).toBeTruthy();
      expect(screen.getByText(mockDisplayContent.value!)).toBeTruthy();
    });
  });

  describe('when leading is provided', () => {
    it('renders leading element', () => {
      renderComponent({
        leading: renderIcon(IconType.wallet)({color: 'red', size: 24}),
      });
      expect(screen.getByTestId('icon-wallet')).toBeTruthy();
    });
  });

  describe('when trailing is provided', () => {
    it('renders trailing element', () => {
      renderComponent({
        trailing: renderIcon(IconType.wallet)({color: 'red', size: 24}),
      });
      expect(screen.getByTestId('icon-wallet')).toBeTruthy();
    });
  });

  describe('when navigationIndicator is provided', () => {
    it('renders navigation indicator', () => {
      renderComponent({onPress: jest.fn(), navigationIndicator: true});
      expect(screen.getByTestId('icon-chevron-right')).toBeTruthy();
    });

    it('does not render navigation indicator if onPress is not provided', () => {
      renderComponent({navigationIndicator: true, onPress: undefined});
      expect(screen.queryByTestId('icon-chevron-right')).toBeNull();
    });
  });
});
