import React from 'react';
import {IconType} from 'src/assets/icons/types';
import {fireEvent, render} from 'src/configs/test-utils';
import SelectColorContainer, {
  Props,
} from 'src/features/add-wallet/screens/select-color/ui';
import {InstitutionProps} from 'src/features/add-wallet/types';

let mockInstitution: InstitutionProps = {
  backgroundColor: '#2A5C99',
  color: '#EAC43D',
  icon: IconType.wallet,
  name: 'Carteira',
  type: 'personal',
};
const mockOnBackPress = jest.fn();
const mockSelectColor = jest
  .fn()
  .mockImplementation((institution: InstitutionProps) => {
    mockInstitution = institution;
  });
const mockOnConfirm = jest.fn();
const containerInstance = ({institution = mockInstitution}: Partial<Props>) =>
  render(
    <SelectColorContainer
      institution={institution}
      onBack={mockOnBackPress}
      selectColor={mockSelectColor}
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
    expect(mockSelectColor).toHaveBeenCalledWith(mockInstitution);
  });
});
