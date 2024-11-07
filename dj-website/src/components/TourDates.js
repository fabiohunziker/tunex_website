// TourDates.js
import React from 'react';
import './TourDates.css';
import zanzibar from '../events/0911zanzibar.jpg'
const TourDates = () => {
    return (
        <div className="tour-dates">
            <h2>Upcoming Shows</h2>
            <div className="event">
                <img src={zanzibar} alt="Event Flyer" />
                <div>
                    <h3>Millenium to the future</h3>
                    <p>Date: 09.11.2024</p>
                    <p>Time: 22:00</p>
                    <p>Place: Zanzibar Wohlen</p>
                </div>
            </div>

        </div>
    );
};

export default TourDates;
