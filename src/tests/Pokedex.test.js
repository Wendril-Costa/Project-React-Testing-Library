import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokedex', () => {
  it('Teste se página contém um heading `h2` com o texto `Encountered pokémons`', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(title).toBeDefined();
  });
  describe('Teste o botão `Próximo pokémon` é clicado.', () => {
    it('O botão deve conter o texto `Próximo pokémon`', () => {
      renderWithRouter(<App />);
      const button = screen.getByRole('button', { name: 'Próximo pokémon' });
      expect(button).toBeDefined();
    });
    it('Se o botão mostra os Pokemos apos ser clicado', () => {
      renderWithRouter(<App />);
      const button = screen.getByRole('button', { name: 'Próximo pokémon' });
      expect(button).toBeDefined();
      userEvent.click(button);
      const pokemonName = screen.getByTestId('pokemon-name');
      expect(pokemonName).toHaveTextContent('Charmander');
    });
  });
  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon).toHaveLength(1);
  });
  it('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const button = screen.getAllByRole('button');
    expect(button[0]).toHaveTextContent('All');
    expect(button[1]).toHaveTextContent('Electric');
    expect(button[2]).toHaveTextContent('Fire');
    expect(button[3]).toHaveTextContent('Bug');
    expect(button[4]).toHaveTextContent('Poison');
    expect(button[5]).toHaveTextContent('Psychic');
    expect(button[6]).toHaveTextContent('Normal');
    expect(button[7]).toHaveTextContent('Dragon');
  });
  it('Teste se o botão All está sempre visivel.', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: 'All' });
    expect(button).not.toBeDisabled();
  });
  it('Teste se os botões funcionam.', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons).toBeDefined();
    const All = screen.getByRole('button', { name: 'All' });
    userEvent.click(All);
    const Electric = screen.getByRole('button', { name: 'Electric' });
    userEvent.click(Electric);
    const Fire = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(Fire);
    const Bug = screen.getByRole('button', { name: 'Bug' });
    userEvent.click(Bug);
    const Poison = screen.getByRole('button', { name: 'Poison' });
    userEvent.click(Poison);
    const Psychic = screen.getByRole('button', { name: 'Psychic' });
    userEvent.click(Psychic);
    const Normal = screen.getByRole('button', { name: 'Normal' });
    userEvent.click(Normal);
    const Dragon = screen.getByRole('button', { name: 'Dragon' });
    userEvent.click(Dragon);
  });
});
