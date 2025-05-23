import React, {useEffect,useState} from 'react';
import '../Styles/landingPage.css'; // Import your Introduction styles
import InstituteImage from '../Assests/pexels-rdne-8500350.jpg'; // Import your image
import introPoster1 from '../Assests/pexels-rdne-8500309.jpg'
import introPoster2 from '../Assests/seminar.jpg'
import introPoster3 from '../Assests/workshop.jpg'
import NewsPage from './News'
const LandingPage = () => {

    const images = [introPoster1, introPoster2, introPoster3];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="intro-poster">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt="Nenasara Institute"
                        className={index === activeIndex ? 'active' : 'inactive'}
                    />
                ))}
            </div>


            <div className="introduction-container">

                <div className="introduction-text">
                    <div>
                        <h1 className="introduction-title">Welcome to Nenasara Institute</h1>
                        <h4>The way for your dream</h4>
                    </div>

                    <p className="introduction-paragraph">
                        Nenasara Institute is a premier educational institution dedicated to providing high-quality education and fostering a passion for learning. Our experienced faculty, state-of-the-art facilities, and comprehensive curriculum are designed to help students achieve academic excellence and personal growth. Join us to embark on a journey of knowledge, discovery, and success.
                    </p>
                    <p className="introduction-paragraph">
                        Hellow Nenasara f programs and courses that cater to diverse interests and career aspirations. Our faculty members are experts in their respective fields, committed to mentoring and guiding students towards their goals.
                    </p>
                    <p className="introduction-paragraph">
                        including advanced laboratories, a well-stocked library, and collaborative learning spaces, providing an environment conducive to learning and innovation. We also emphasize extracurricular activities, encouraging students to participate in sports, arts, and community service to develop well-rounded personalities.
                    </p>
                    <p className="introduction-paragraph">
                        We are proud of our inclusive and supportive community, where students from various backgrounds come together to learn and grow. At Nenasara Institute, we prepare our students not only for academic success but also to become responsible, empathetic, and forward-thinking leaders in society. Explore our programs and join us in creating a brighter future.
                    </p>
                </div>
                <div className="introduction-image">
                    <img src={InstituteImage} alt="Nenasara Institute" />
                </div>
            </div>
            <div className='new-area'>
                <div className='news-title'><h1>News</h1></div>

                <NewsPage/>
            </div>
        </>

    );
};

export default LandingPage;
