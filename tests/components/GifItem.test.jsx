import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {
  
  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';
  
  test('debe mostrar el componente correctamente - snapshot', () => {
    
    const container = render(<GifItem title={title} url={url}/>);
    
    expect(container).toMatchSnapshot();
  })

  test('debe mostrar la imagen con el URL y el ALT', () => {
    
    render(<GifItem title={title} url={url}/>);
    
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe mostrar eltitulo en el componente', () => {
    
    render(<GifItem title={title} url={url}/>);
    
    //expect( screen.getByText(title)).toBeTruthy();

  });
});
