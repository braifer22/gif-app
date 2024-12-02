import { Search } from './Search.jsx';
import styles from './Header.module.css';
import { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';

export function Header({ onSubmit, categories }) {
    const [value, setValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (value.trim() === '') return;
        if (categories.includes(value.trim())) return;

        onSubmit(value);
        setValue('');
    }

    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit}>
                <label>
                    <Search width={18} strokeColor="rgb(102,102,102)" />
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="Buscar gifs..."
                    />
                </label>
            </form>
        </header>
    );
}

Header.propTypes = {
    onSubmit: func.isRequired,
    categories: arrayOf(string),
};
