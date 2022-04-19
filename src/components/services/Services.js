import React, { useEffect, useState } from 'react';
import Service from './service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        
        fetch("serviceDetails.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services'>

            {
                services.map(service =>
                    <Service
                        service={service}
                        key={service.id}
                    />
                )
            }
        </div>
    );
};

export default Services;