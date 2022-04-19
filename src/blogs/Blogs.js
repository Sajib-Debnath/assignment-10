import React from 'react';
import Header from '../components/header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ maxWidth: "90%", margin: 'auto' }}>
                <h2> 1 Difference between authorization and authentication</h2>
                <h5> </h5>
                <h2> 2 Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h5> </h5>
                <h2> 3 What other services does firebase provide other than authentication</h2>
                <h5> </h5>
            </div>
        </div >
    );
};

export default Blogs;