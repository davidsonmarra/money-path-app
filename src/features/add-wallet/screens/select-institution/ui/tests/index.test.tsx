import React from 'react';
import {fireEvent, render} from 'src/configs/test-utils';
import SelectInstitutionContainer from 'src/features/add-wallet/screens/select-institution/ui';

const containerInstance = (props: any) =>
  render(<SelectInstitutionContainer {...props} />);

describe('SelectInstitutionContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const container = containerInstance({}).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('should call onBackPress', () => {
    const mockOnBackPress = jest.fn();
    const container = containerInstance({onBack: mockOnBackPress});
    container.getByTestId('btn-left-icon').props.onClick();
    expect(mockOnBackPress).toHaveBeenCalledTimes(1);
  });

  it('should call selectInstitution', () => {
    const mockSelectInstitution = jest.fn();
    const container = containerInstance({
      selectInstitution: mockSelectInstitution,
    });
    fireEvent.press(container.getByText('Carteira'));
    expect(mockSelectInstitution).toHaveBeenCalledWith({
      backgroundColor: '#2A5C99',
      color: '#EAC43D',
      icon: 'wallet',
      name: 'Carteira',
      type: 'personal',
    });
  });
});
