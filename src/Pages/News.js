
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/News.css';
import exhibition from '../Assests/exhibition.jpg';
import seminar from '../Assests/seminar.jpg';
import workshop from '../Assests/workshop.jpg';
import workshop1 from '../Assests/workshop1.jpg'

function News() {

    document.addEventListener('DOMContentLoaded', () => {
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        const landingPage = document.querySelector('.landing-page');

        leftArrow.addEventListener('click', () => {
            landingPage.scrollBy({
                left: -300, // Adjust the value based on how much you want to scroll
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            landingPage.scrollBy({
                left: 300, // Adjust the value based on how much you want to scroll
                behavior: 'smooth'
            });
        });
    });




    return (
        <div class="scroll-container">
            <div class="scroll-arrow left-arrow">&lt;</div>
            <div className="landing-page">
                <div className="catalog">
                    <img src={exhibition} alt="Dogs" className="catalog-image" />
                    <h2>Exhibition</h2>
                    <p>Students are organized exhibition for showcase their talents</p>
                    <Link to="/dogs">
                        <button className="see-more">See More</button>
                    </Link>
                </div>

                <div className="catalog">
                    <img src={seminar} alt="Dogs" className="catalog-image" />
                    <h2>Seminar</h2>
                    <p>We are aranged seminar for student to improve their knowledge</p>
                    <Link to="/vehicles">
                        <button className="see-more">See More</button>
                    </Link>
                </div>

                <div className="catalog">
                    <img src={workshop} alt="Dogs" className="catalog-image" />
                    <h2>Events</h2>
                    <p>Fun events gives enjoyble things for their life</p>
                    <Link to="/handlers">
                        <button className="see-more">See More</button>
                    </Link>
                </div>

                <div className="catalog">
                    <img src={workshop1} alt="Dogs" className="catalog-image" />
                    <h2>Leadership Programs</h2>
                    <p>We try to improve their leadership skills for their future life</p>



                    <Link to="/blog">

                        <button className="see-more">See More</button>
                    </Link>
                </div>
            </div>
            <div class="scroll-arrow right-arrow">&gt;</div>
        </div>



    )
}

export default News