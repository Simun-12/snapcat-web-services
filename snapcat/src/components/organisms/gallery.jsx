import React, { useEffect, useState } from 'react';
import { fetchCatSnap } from '../../services/fetchCatSnap'; // Adjust the import path as necessary

const Gallery = () => {
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const images = await fetchCatSnap();
                setCatImages(images);
            } catch (error) {
                console.error('Error fetching cat snaps:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="gallery">
            {catImages.length > 0 ? (
                catImages.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.url} alt={`Cat ${index + 1}`} className="gallery-image" />
                    </div>
                ))
            ) : (
                <p>Loading cat snaps...</p>
            )}
        </div>
    );
};

export default Gallery;