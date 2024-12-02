// import { useState } from 'react';
import styles from './GifList.module.css';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export function GifList({ category }) {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <article>
            <h1 className={styles.title}>{category}</h1>
            {isLoading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : (
                <ul className={styles.gifGrid}>
                    {images.map((image) => {
                        return (
                            <GifItem
                                key={image.id}
                                src={image.url}
                                title={image.title}
                            />
                        );
                    })}
                </ul>
            )}
        </article>
    );
}
