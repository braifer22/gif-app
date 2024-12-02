export function GifItem({ title, src }) {
    return (
        <li>
            <img src={src} alt="" />
            <p>{title}</p>
        </li>
    );
}
