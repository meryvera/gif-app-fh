import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  
  test('debe de mostrar el componente correctamente', () => {
    render(<GifExpertApp />);
    // screen.debug();
    expect(screen.getByText('GifExpertApp')).toBeTruthy();
  });

  test('el estado de las categorias se debe modificar cuando el usuario ingrese un input', () => {
    const inputValue = 'Piccolo Dai Ma Ku';

    render(<GifExpertApp />);
    
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole('form'));
    
    expect(screen.getByText(inputValue)).toBeTruthy();
  });

  test('no debe agregar una categoría si ya está presente', () => {
    const inputValue = 'Digimon';

    render(<GifExpertApp />);
    
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole('form'));

    // Intentamos agregar la misma categoría nuevamente
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(screen.getByRole('form'));

    // Verificamos que la categoría no se haya duplicado
    const categoryElements = screen.getAllByText(inputValue);
    expect(categoryElements).toHaveLength(1); 
  })
  
  
});