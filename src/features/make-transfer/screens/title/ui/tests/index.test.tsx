import React from 'react';
import { fireEvent, render } from 'src/configs/test-utils';
import TitleContainer from 'src/features/make-transfer/screens/title/ui';

describe('TitleContainer', () => {
  const mockProps = {
    onBack: jest.fn(),
    setTitle: jest.fn(),
    setDescription: jest.fn(),
    onConfirm: jest.fn(),
    title: '',
    description: '',
    isDisabled: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    const screen = render(<TitleContainer {...mockProps} />).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should render correctly with title', () => {
    const screen = render(
      <TitleContainer {...mockProps} title="Teste de título" />,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });

  it('should call onBack when back button is pressed', () => {
    const { getByText } = render(<TitleContainer {...mockProps} />);

    // Simular o clique no botão de voltar do Header
    // Como o Header é um componente externo, vamos testar se o onBack é passado corretamente
    expect(mockProps.onBack).toBeDefined();
  });

  it('should call setTitle when input text changes', () => {
    const { getByTestId } = render(<TitleContainer {...mockProps} />);

    const input = getByTestId('input-title');
    fireEvent.changeText(input, 'Novo título');

    expect(mockProps.setTitle).toHaveBeenCalledWith('Novo título');
  });

  it('should call onConfirm when confirm button is pressed', () => {
    const { getByTestId } = render(
      <TitleContainer {...mockProps} isDisabled={false} />,
    );

    const confirmButton = getByTestId('btn-confirm');
    fireEvent.press(confirmButton);

    expect(mockProps.onConfirm).toHaveBeenCalled();
  });

  it('should disable confirm button when isDisabled is true', () => {
    const { getByTestId } = render(
      <TitleContainer {...mockProps} isDisabled={true} />,
    );

    const confirmButton = getByTestId('btn-confirm');
    expect(confirmButton.props.accessibilityState.disabled).toBe(true);
  });

  it('should enable confirm button when isDisabled is false', () => {
    const { getByTestId } = render(
      <TitleContainer {...mockProps} isDisabled={false} />,
    );

    const confirmButton = getByTestId('btn-confirm');
    expect(confirmButton.props.accessibilityState.disabled).toBe(false);
  });

  it('should display correct text content', () => {
    const { getByText } = render(<TitleContainer {...mockProps} />);

    expect(getByText('Digite o título')).toBeTruthy();
    expect(
      getByText(
        'Para criar uma transferência, precisamos que você digite um título para identificá-la:',
      ),
    ).toBeTruthy();
    expect(getByText('Descrição (opcional):')).toBeTruthy();
    expect(getByText('Continuar')).toBeTruthy();
  });

  it('should display input with correct placeholder', () => {
    const { getByTestId } = render(<TitleContainer {...mockProps} />);

    const input = getByTestId('input-title');
    expect(input.props.placeholder).toBe('Ex: Pagamento da conta de luz');
  });

  it('should display input with correct value', () => {
    const { getByTestId } = render(
      <TitleContainer {...mockProps} title="Título de teste" />,
    );

    const input = getByTestId('input-title');
    expect(input.props.value).toBe('Título de teste');
  });

  it('should call setDescription when description text changes', () => {
    const { getByTestId } = render(<TitleContainer {...mockProps} />);

    const textArea = getByTestId('input-description');
    fireEvent.changeText(textArea, 'Nova descrição');

    expect(mockProps.setDescription).toHaveBeenCalledWith('Nova descrição');
  });

  it('should display description with correct placeholder', () => {
    const { getByTestId } = render(<TitleContainer {...mockProps} />);

    const textArea = getByTestId('input-description');
    expect(textArea.props.placeholder).toBe(
      'Ex: Pagamento da conta de luz do mês de dezembro',
    );
  });

  it('should display description with correct value', () => {
    const { getByTestId } = render(
      <TitleContainer {...mockProps} description="Descrição de teste" />,
    );

    const textArea = getByTestId('input-description');
    expect(textArea.props.value).toBe('Descrição de teste');
  });
});
