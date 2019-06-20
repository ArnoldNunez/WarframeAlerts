import React from 'react';
import ReactDOM from 'react-dom';

function Timer (props) {
    const activation = Math.floor(new Date(props.activation).getTime() / 1000);
    const expiration = Math.floor(new Date(props.expiration).getTime() / 1000);
    let curTime = props.curTime;

    let delta = expiration - curTime;    // time difference in seconds

    let daysLeft = Math.floor(delta / 86400);
    delta -= daysLeft * 86400;

    let hoursLeft =  Math.floor(delta / 3600) % 24;
    delta -= hoursLeft * 3600;

    let minLeft = Math.floor(delta / 60) % 60; 

    let timeStr = daysLeft > 0 ? `${daysLeft}d ${hoursLeft}h ${minLeft}m` : `${hoursLeft}h ${minLeft}m`

    let result;
    if (curTime >= activation) {
        // is active
        result = (
            <div className='cdt'>
                <span>{timeStr}</span>
            </div>
        );
    } else if (curTime >= expiration) {
        // is expired
        result = (
            <div className='cdt'>
                <span>Expired</span>
            </div>
        );
    } else {
        // not active yet
        result = (
            <div className='cdt'>
                <span>Not Active</span>
            </div>
        );
    }

    return result;
}


export default Timer;