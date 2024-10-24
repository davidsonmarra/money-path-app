import {render} from '@testing-library/react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IAllThemeProviders {
  children: React.ReactElement;
}

const AllTheProviders = ({children}: IAllThemeProviders) => (
  <SafeAreaView>{children}</SafeAreaView>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export const renderWithCustomProviders = (component: React.ReactElement) => {
  return {
    render: render(<SafeAreaView>{component}</SafeAreaView>),
  };
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};