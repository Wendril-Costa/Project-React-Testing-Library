import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente FaoritePokemons', () => {
  it('Teste se é exibido na tela a mensagem `No favorite pokemon found`', () => {
    renderWithRouter(<FavoritePokemons />);
    const notFound = screen.getByText('No favorite pokemon found');
    expect(notFound).toBeInTheDocument();
  });
  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons />);
    const favorite = screen.queryAllByText('id');
    const pokémonsFavorite = favorite.length;
    expect(favorite).toHaveLength(pokémonsFavorite);
  });
});
