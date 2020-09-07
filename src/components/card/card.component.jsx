import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <h2>{props.movie.name}</h2>
        <p>{props.movie.rank}</p>
    </div>
)