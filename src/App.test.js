import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('deve renderizar o título do formulário', () => {
  render(<App />);
  const titleElement = screen.getByText(/Teste de Formulário/i);
  expect(titleElement).toBeInTheDocument();
});

test('deve renderizar o campo de input e o botão', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Digite seu nome/i);
  const buttonElement = screen.getByRole('button', { name: /Enviar/i });
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('deve mostrar a mensagem de saudação após digitar e enviar o nome', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Digite seu nome/i);
  const buttonElement = screen.getByRole('button', { name: /Enviar/i });

  fireEvent.change(inputElement, { target: { value: 'Miguel' } });
  fireEvent.click(buttonElement);

  const mensagemElement = screen.getByTestId('mensagem-saudacao');
  expect(mensagemElement).toHaveTextContent('Olá, Miguel!');
});

test('deve mostrar a mensagem de erro se o nome for enviado vazio', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Enviar/i });

  fireEvent.click(buttonElement);

  const mensagemElement = screen.getByTestId('mensagem-saudacao');
  expect(mensagemElement).toHaveTextContent('Por favor, digite seu nome.');
});

test('deve atualizar o valor do input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Digite seu nome/i);

  fireEvent.change(inputElement, { target: { value: 'Teste' } });

  expect(inputElement).toHaveValue('Teste');
});
