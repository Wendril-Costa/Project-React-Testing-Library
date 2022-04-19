import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente App', () => {
  describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      it('O primeiro link deve possuir o texto `Home`', () => {
        renderWithRouter(<App />);
        const navegation = screen.getAllByRole('link');
        expect(navegation[0]).toHaveTextContent('Home');
      });
      it('O segundo link deve possuir o texto `About`', () => {
        renderWithRouter(<App />);
        const navegation = screen.getAllByRole('link');
        expect(navegation[1]).toHaveTextContent('About');
      });
      it('O terceiro link deve possuir o texto `Favorite Pokémons`', () => {
        renderWithRouter(<App />);
        const navegation = screen.getAllByRole('link');
        expect(navegation[2]).toHaveTextContent('Favorite Pokémons');
      });
    });
  it('Teste se é redirecionada para a página inicial ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  it('Teste se é redirecionada para a página de About, ao clicar em About.', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  it('Teste se  é redirecionada para a página de Pokémons, ao clicar em Pokémons', () => {
    const { history } = renderWithRouter(<App />);
    const pokémonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(pokémonsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  it('Teste se é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');
    const notFound = screen.getByRole('img',
      { name: 'Pikachu crying because the page requested was not found' });
    expect(notFound).toBeDefined();
  });
});
