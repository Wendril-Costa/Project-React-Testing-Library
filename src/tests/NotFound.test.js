import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente NotFound', () => {
  it('Teste se página contém um heading com o texto `Page requested not found 😭`', () => {
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Page requested not found 😭');
  });
  it('Teste se página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('img',
      { name: 'Pikachu crying because the page requested was not found' });
    expect(notFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
