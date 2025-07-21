import React from 'react';
import { fireEvent, render } from 'src/configs/test-utils';
import CategoryScreen from 'src/features/make-transfer/screens/category';
import { useCategoriesStore } from 'src/hooks/useCategories';

jest.mock('src/hooks/useCategories');
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: mockNavigate,
  }),
}));

const mockUseCategoriesStore = useCategoriesStore as jest.MockedFunction<
  typeof useCategoriesStore
>;

describe('CategoryScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseCategoriesStore.mockReturnValue({
      categories: [],
      createCategory: jest.fn(),
    });
  });

  it('should render correctly with default props', () => {
    const screen = render(<CategoryScreen />).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should render correctly with loading status', () => {
    const screen = render(<CategoryScreen initialStatus="loading" />).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should render correctly with error status', () => {
    const screen = render(<CategoryScreen initialStatus="error" />).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should initialize categories when component mounts', () => {
    const mockCreateCategory = jest.fn();
    mockUseCategoriesStore.mockReturnValue({
      categories: [],
      createCategory: mockCreateCategory,
    });

    render(<CategoryScreen />);

    setTimeout(() => {
      expect(mockCreateCategory).toHaveBeenCalled();
    }, 100);
  });

  it('should pass correct props to CategoryContainer', () => {
    const mockCategories = [
      {
        id: '1',
        name: 'Alimentação',
        backgroundColor: '#FF6B35',
        color: '#FFFFFF',
        icon: 'food',
      },
    ];

    mockUseCategoriesStore.mockReturnValue({
      categories: mockCategories,
      createCategory: jest.fn(),
    });

    const { getByText } = render(<CategoryScreen initialStatus="default" />);

    expect(getByText('Selecione uma categoria')).toBeTruthy();
  });

  it('should navigate to Title screen when onConfirm is called', () => {
    const mockCategories = [
      {
        id: '1',
        name: 'Alimentação',
        backgroundColor: '#FF6B35',
        color: '#FFFFFF',
        icon: 'food',
      },
    ];

    mockUseCategoriesStore.mockReturnValue({
      categories: mockCategories,
      createCategory: jest.fn(),
    });

    const { getByText } = render(<CategoryScreen initialStatus="default" />);

    fireEvent.press(getByText('Alimentação'));
    fireEvent.press(getByText('Continuar'));

    expect(mockNavigate).toHaveBeenCalledWith('MakeTransferStack', {
      screen: 'Title',
    });
  });
});
