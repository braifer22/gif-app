import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas <GifItem />', () => {
    const title = 'Alexis';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} src={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el SRC y el ALT indicado', () => {
        render(<GifItem title={title} src={url} />);
        expect(screen.getByRole('img').getAttribute('src')).toBe(url);
        expect(screen.getByRole('img').getAttribute('alt')).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} src={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
