import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { GifList } from '../../src/components/GifList';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { vitest } from 'vitest';

vitest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifList />', () => {
    const category = 'Valorant';

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifList category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes desde useFetchGifs', async () => {
        const gifs = [
            {
                id: '123',
                title: category,
                url: 'https://localhost/valorant.png',
            },
            {
                id: '234',
                title: 'barcelona',
                url: 'https://localhost/barcelona.png',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifList category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
