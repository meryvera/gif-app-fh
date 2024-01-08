import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;
    
    onNewCategory(inputValue.trim());

    setInputValue('');
    // Hay 2 maneras de agregar al array el nuevo valor ingresado al input - DE PADRE A HIJO
    // 1.
    // setCategories((cat) => [...cat, inputValue]);
    // 2. trayendo el array de categories como prop y agregando el nuevo valor
    // setCategories([...categories, inputValue]);

    // Hay 1 maneras de agregar al array el nuevo valor ingresado al input - DE HIJO A PADRE
  }

  return (
    <form aria-label='form' onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='Search gifs...'
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
