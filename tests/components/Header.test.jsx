import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Header } from '../../src/components/Header';

describe('Pruebas en <Header(>', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<Header onSubmit={() => {}} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Valorant' } });

        expect(input.value).toBe('Valorant');
    });
});
