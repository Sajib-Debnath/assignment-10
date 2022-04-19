import React from 'react';
import Services from '../services/Services'
import Banner from '../banner/Banner'
import './home.css'
import Header from '../header/Header';
import DetailedSection from '../detailedSection/DetailedSection';

const Home = () => {
    return (
        <div>
            <div className='banner-area'>
                <Header />
                <Banner />
            </div>
            <div className="service-area" id='#service'>
                <h1> Choose Food</h1>
                <Services />
                <DetailedSection />
            </div>

        </div>

    );
};

export default Home;