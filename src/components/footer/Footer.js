import React from 'react';



const Footer = () => {
    const style = {
        backgroundColor: 'rgb(162, 47, 207)',
        height: '80px',
        textAlign : 'center',
        color: 'white',
        paddingTop: '10px'
    }
    return (
        <div style={style}>
            <h3>Copyright reserved by the author</h3>
        </div>
    );
};

export default Footer;