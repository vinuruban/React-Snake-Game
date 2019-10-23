import React from 'react';
import './App.css';

function Food(props) {

    const getStyle={
        left: `${props.dotty[0]}%`,
        top: `${props.dotty[1]}%`
    }

    return (
        <div className="snake-food" style={getStyle}>
        </div>
    )
}

export default Food