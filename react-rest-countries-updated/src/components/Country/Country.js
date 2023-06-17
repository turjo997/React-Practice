import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Name: {props.name}</h2>
            <p>Area: {props.area}</p>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;