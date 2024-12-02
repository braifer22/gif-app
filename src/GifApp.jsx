import { useState } from 'react';
import { GifList } from './components/GifList';
import { Header } from './components/Header';
import styles from './GifApp.module.css';

export default function GifApp() {
    const [categories, setCategories] = useState([]);

    function onSubmit(category) {
        setCategories([category, ...categories]);
    }

    return (
        <>
            <Header onSubmit={onSubmit} categories={categories} />
            <section className={styles.gifSection}>
                {categories.map((category) => {
                    return <GifList key={category} category={category} />;
                })}
            </section>
        </>
    );
}
