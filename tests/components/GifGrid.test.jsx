import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test of GifGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abs',
                title: 'Saitama',
                url: 'http://saitama.url'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://goku.url'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    })


})