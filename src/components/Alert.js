import React from 'react';
import Timer from './Timer';

/**
 * Component representing an in-game alert.
 * @param {*} props Data associated with one alert.
 */
function Alert(props) {

    const curTime = Math.floor(new Date().getTime() / 1000);
    
    return (
        <div className="alert">
            <div className='cmpt-header-main'>{props.description}</div>
            <div className='cmpt-header-sub'>{props.node}</div>

            <div>{props.faction}</div>
            <div>{props.type}</div>
            
            <Timer activation={props.activation} expiration={props.expiration} curTime={curTime}/>

            <div>{props.rewardString}</div>
        </div>
    );
}

export default Alert;