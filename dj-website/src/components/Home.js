import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import image1 from '../website-gallery/zanzibar12.jpg';
import image2 from '../website-gallery/WhatsApp Image 2024-10-12 at 00.49.42_90f57886.jpg';
import image3 from '../website-gallery/WhatsApp Image 2024-10-12 at 00.49.40_604c1f52.jpg';

const Home = () => (
    <div className="home">
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            interval={5000}

        >
            <div className="carousel-slide">
                <img
                    src={image1}
                    alt="Slide 1"
                    className="carousel-image"
                    style={{margin: '0'}}
                />
            </div>

            <div className="carousel-slide">
                <img src={image2} alt="Slide 2" className="carousel-image"/>
            </div>
            <div className="carousel-slide">
                <img src={image3} alt="Slide 3" className="carousel-image"/>
            </div>
        </Carousel>
    </div>
);

export default Home;
