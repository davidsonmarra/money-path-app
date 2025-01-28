import React from 'react';
import {IconType} from 'src/assets/icons/types';
import {fireEvent, render} from 'src/configs/test-utils';
import SelectColorContainer, {
  Props,
} from 'src/features/add-wallet/screens/select-color/ui';
import {WalletProps} from 'src/features/add-wallet/types';

let mockBackgroundColor = '#2A5C99';
let mockColor = '#EAC43D';
const mockOnBackPress = jest.fn();
const mockSetBackgroundColor = jest.fn().mockImplementation(() => {
  mockBackgroundColor = '#2A5C99';
});
const mockSetColor = jest.fn().mockImplementation(() => {
  mockColor = '#EAC43D';
});
const mockOnConfirm = jest.fn();
const containerInstance = ({
  color = mockColor,
  backgroundColor = mockBackgroundColor,
}: Partial<Props>) =>
  render(
    <SelectColorContainer
      color={color}
      icon={IconType.wallet}
      backgroundColor={backgroundColor}
      onBack={mockOnBackPress}
      setBackgroundColor={mockSetBackgroundColor}
      setColor={mockSetColor}
      onConfirm={mockOnConfirm}
    />,
  );

describe('SelectColorContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call onBackPress', () => {
    const container = containerInstance({});
    container.getByTestId('btn-left-icon').props.onClick();
    expect(mockOnBackPress).toHaveBeenCalledTimes(1);
  });

  it('should call selectInstitution for icon color', async () => {
    const container = containerInstance({});
    const colorButton = container.getByTestId('btn-color-#EE82EE');
    fireEvent.press(colorButton);
    expect(mockSetColor).toHaveBeenCalledWith('#EE82EE');
  });
});
