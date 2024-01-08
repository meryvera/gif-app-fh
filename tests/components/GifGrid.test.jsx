import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('', () => {
  
  const category = 'Dragon Ball';

  test('debe de mostrar el loading inicialmente', () => {
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category}/>);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
    // screen.debug();
  })

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
    
    const gifs = [
      {
      id: '1',
      url: 'https://localhost/trunks.jpg',
      title: 'trunks'
      },
      {
        id: '2',
        url: 'https://localhost/vegeta.jpg',
        title: 'vegeta'
      }
  ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });
    
    render(<GifGrid category={category}/>);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  })
  
});
