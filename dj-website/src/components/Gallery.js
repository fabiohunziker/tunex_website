// Gallery.js
import React from 'react';
import './Gallery.css';
import zanzibar from '../events/0911zanzibar.jpg'
const images = [
    zanzibar,
    'gallery2.jpg',
    'gallery3.jpg',
    // Add more image paths
];

const Gallery = () => (
    <div className="gallery">
        {images.map((src, index) => (
            <div key={index} className="gallery-item">
                <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
        ))}
    </div>
);

export default Gallery;
