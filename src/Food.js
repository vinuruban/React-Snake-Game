import React from 'react';
import './App.css';

function Food(props) {

    const getStyle={
        left: `${props.redFood[0]}%`,
        top: `${props.redFood[1]}%`
    }

    return (
        <div className="snake-food" style={getStyle}>
        </div>
    )
}

export default Food