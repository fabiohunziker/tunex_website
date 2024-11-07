// Music.js
import React from 'react';
import './Music.css';

const Music = () => {
    return (
        <div className="music">
            <h2>Music</h2>
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/1ZufbRtYKUKrlFVBuiNXoJ?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Music;
