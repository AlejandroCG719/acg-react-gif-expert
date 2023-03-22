import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => { 

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

    const category = 'One Punch';

    test('debe de mostrar el loading incialmente', () => { 

        render(<GifGrid category={ category } />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category) );

    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://one-punche.com/saitama'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'htpps://dragon-ball-super.com/goku-ultra-instinto'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />);

        // screen.debug();
    

        expect(screen.getAllByRole('img').length).toBe(2);
    });

 })