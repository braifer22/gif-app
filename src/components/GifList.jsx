import { string } from 'prop-types';
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
                <>
                    <ul className={styles.gifGrid}>
                        {images.map((image) => {
                            return (
                                <GifItem
                                    key={image.id}
                                    src={image.url}
                                    title={image.title}
                                    height={image.height}
                                    width={image.width}
                                />
                            );
                        })}
                    </ul>
                    {images.length === 0 && (
                        <p>
                            No encontramos Gifs sobre {category} {':('}
                        </p>
                    )}
                </>
            )}
        </article>
    );
}

GifList.propTypes = {
    category: string.isRequired,
};
