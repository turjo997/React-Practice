import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, population, flags } = props.country;
    return (
        <div className='country'>

            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt='' />
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;