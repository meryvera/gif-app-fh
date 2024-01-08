import { render, fireEvent, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test('debe de cambiar el valor de la caja de texto', () => {
    
    render(<AddCategory onNewCategory={() => {}}/>);

    const input = document.querySelector('input');
    fireEvent.change(input, { target: { value: 'Bulma' } });

    expect(input.value).toBe('Bulma');
  });

  test('debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Tao Pai Pai';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form); // este evento submit es el que se dispara en el form y se vuelve a limpar el input

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // se espera que se haya llamado con un string  (el valor del input)

  })
  
  test('no debe de llamar el onNewCategory si el input está vacio', () => {
    const inputValue = '';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  })
});