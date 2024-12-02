import { string } from 'prop-types';

export function GifItem({ title, src }) {
    return (
        <li>
            <img src={src} alt={title} />
            <p>{title}</p>
        </li>
    );
}

GifItem.propTypes = {
    title: string.isRequired,
    src: string.isRequired,
};
