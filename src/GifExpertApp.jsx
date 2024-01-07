import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(e)=>onAddCategory(e)} />

      { categories.map((category) =>  (
          <GifGrid key={category} category={category}/>
        )
      )}
    </>
  )
}
