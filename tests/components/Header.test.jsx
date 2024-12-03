import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import { Header } from '../../src/components/Header';

describe('Pruebas en <Header(>', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<Header onSubmit={() => {}} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Valorant' } });

        expect(input.value).toBe('Valorant');
    });

    test('Debe llamar onSubmit si el input tiene un valor', () => {
        const inputValue = 'Alexis';
        const onSubmit = vitest.fn();

        render(<Header onSubmit={onSubmit} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onSubmit).toHaveBeenCalled();
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar onSubmit si el input está vacío', () => {
        const onSubmit = vitest.fn();

        render(<Header onSubmit={onSubmit} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onSubmit).toHaveBeenCalledTimes(0);
        expect(onSubmit).not.toHaveBeenCalled();
    });
});
