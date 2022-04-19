import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokemon', () => {
  describe('Teste se é renderizado um card com as informações de determinado.', () => {
    it('Testa o nome correto do Pokémon deve ser mostrado na tela', () => {
      renderWithRouter(<App />);
      const name = screen.getByTestId('pokemon-name');
      expect(name).toHaveTextContent('Pikachu');
    });

    it('Testa o tipo correto do pokémon deve ser mostrado na tela.', () => {
      renderWithRouter(<App />);
      const type = screen.getByTestId('pokemon-type');
      expect(type).toHaveTextContent('Electric');
    });

    it('Testa o peso médio do pokémon', () => {
      renderWithRouter(<App />);
      const weight = screen.getByTestId('pokemon-weight');
      expect(weight).toHaveTextContent('Average weight: 6.0 kg');
    });
    it('Testa a imagem do pokemon', () => {
      renderWithRouter(<App />);
      const image = screen.getByAltText('Pikachu sprite');
      expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    });
  });
  it('Testa se o card pokémon contém link "mais detalhes"', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });
  it('Testa se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);
    const favorite = screen.getByRole('checkbox');
    userEvent.click(favorite);
    const starFavorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(starFavorite).toHaveAttribute('src', '/star-icon.svg');
  });
});
