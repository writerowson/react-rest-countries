import React from 'react';
import './Country.css'


const Country = (props) => {
    return (
        <div className='
        country'>
            <h2>Country Name: {props.name}</h2>
            <h6>Population: {props.population}</h6>
            <p>Area: {props.area}</p>
            <p>Region: {props.region}</p>
        </div>
    );
};

export default Country;