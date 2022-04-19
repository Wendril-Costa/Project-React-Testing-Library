import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const infoPokédex = screen.getAllByText(/Pokémons/i);
    expect(infoPokédex.length).not.toBe(0);
  });
  it('Teste se a página contém um heading `h2` com o texto `About Pokédex`.', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('About Pokédex');
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const paragraph = screen.getAllByText(/Pokémons/i);
    expect(paragraph).toHaveLength(2);
  });
  it('Teste se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
