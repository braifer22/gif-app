import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export function useFetchGifs(category) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getData() {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        images,
        isLoading,
    };
}
