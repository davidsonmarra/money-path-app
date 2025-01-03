import React from 'react';
import {render} from 'src/configs/test-utils';
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
});
