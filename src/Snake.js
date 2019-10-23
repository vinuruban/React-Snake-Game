import React from 'react';
import './App.css';

function Snake(props) {
    return (
        <div>
            {props.blackSnakeDots.map((dot, i) => {

                const getStyle={
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className='snake-dot' key={i} style={getStyle}></div>
                )
            })}
        </div>
    )
}

export default Snake