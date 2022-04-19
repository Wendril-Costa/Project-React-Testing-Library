import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente PokemonDetails', () => {
  describe('Teste se as informações detalhadas são mostradas na tela.', () => {
    it('A página deve conter um texto <name> Details', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /More details/i });
      userEvent.click(moreDetails);
      const title = screen.getByRole('heading', { name: 'Pikachu Details' });
      expect(title).toBeInTheDocument();
    });
    it('Não deve existir o link de navegação os detalhes do pokémon.', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /More details/i });
      userEvent.click(moreDetails);
      expect(moreDetails).not.toBeInTheDocument();
    });
    it('A seção de detalhes deve conter um heading h2 com o texto Summary.', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /More details/i });
      userEvent.click(moreDetails);
      const title = screen.getByRole('heading', { name: 'Summary' });
      expect(title).toBeInTheDocument();
    });
    it('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon.', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /More details/i });
      userEvent.click(moreDetails);
      const paragraph = screen.getByText(/This intelligent Pokémon roast/i);
      expect(paragraph).toBeInTheDocument();
    });
  });
  it('Teste se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);
    const map = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    expect(map).toBeInTheDocument();
    const locations = screen.getAllByAltText(/Pikachu location/i);
    expect(locations.length).not.toBe(0);
    expect(locations[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });
  it('Teste se o usuário pode favoritar um pokémon através da página', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);
    const favorite = screen.getByText(/Pokémon favoritado?/i);
    userEvent.click(favorite);
    const starFavorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(starFavorite).toHaveAttribute('src', '/star-icon.svg');
    userEvent.click(favorite);
    expect(starFavorite).not.toBeInTheDocument();
  });
});
