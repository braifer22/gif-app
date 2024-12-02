export async function getGifs(category) {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=LwIqMXmAHL8W2RRfveBViQXCRxntzOES&q=${category}&limit=9`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const { data } = await res.json();

        const gifs = data.map(({ id, title, images }) => {
            return {
                id: id,
                title: title,
                url: images.downsized_medium.url,
            };
        });

        return gifs;
    } catch (error) {
        console.error('Error fetching gifs:', error);
        return []; // Retorna un array vacío en caso de error.
    }
}
