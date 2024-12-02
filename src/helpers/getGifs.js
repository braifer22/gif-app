export async function getGifs(category) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LwIqMXmAHL8W2RRfveBViQXCRxntzOES&q=${category}&limit=9`;
    const res = await fetch(url);

    const { data } = await res.json();

    const gifs = data.map(({ id, title, images }) => {
        return {
            id: id,
            title: title,
            url: images.downsized_medium.url,
        };
    });

    return gifs;
}
