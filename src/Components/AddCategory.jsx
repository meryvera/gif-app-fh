import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('Hola Mundo')
  
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;

    // Hay 2 maneras de agregar al array el nuevo valor ingresado al input - DE PADRE A HIJO
    // 1.
    // setCategories((cat) => [...cat, inputValue]);
    // 2. trayendo el array de categories como prop y agregando el nuevo valor
    // setCategories([...categories, inputValue]);

    // Hay 1 maneras de agregar al array el nuevo valor ingresado al input - DE HIJO A PADRE
    onNewCategory(inputValue.trim());

    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='Search gifs...'
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}
