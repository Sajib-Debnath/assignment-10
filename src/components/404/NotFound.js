import React from 'react';
import notFound from '../../img/notFound.webp'
import Header from '../header/Header';

const NotFound = () => {

    return (
        <div >
            <Header />
            <img src={notFound} width="100%" alt="" />
        </div>
    );
};

export default NotFound;