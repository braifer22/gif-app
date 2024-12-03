import { string } from 'prop-types';

export function GifItem({ title, src, height, width }) {
    return (
        <li>
            <img
                src={src}
                alt={title}
                style={{ aspectRatio: `${width}/${height}` }}
            />
            <p>{title}</p>
        </li>
    );
}

GifItem.propTypes = {
    title: string.isRequired,
    src: string.isRequired,
};
