import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', // Asegura que las pruebas se ejecuten en un entorno de navegador simulado
        setupFiles: './setupTests.js', // Carga automáticamente setupTests.js antes de cada test
    },
});
