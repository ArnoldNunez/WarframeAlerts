import React from 'react';

import Timer from './Timer';

/**
 * Component representing an in-game relic Fissure.
 * @param {*} props Data associated with one Fissure.
 */
function Fissure(props) {

    const curTime = Math.floor(new Date().getTime() / 1000);

    return (
        <div className="fissure">
            <div className="cmpt-header-main">{props.tier}</div>
            <div className="cmpt-header-sub">{props.node}</div>

            <div>{props.type}</div>
            <div>{props.faction}</div>

            <Timer activation={props.activation} expiration={props.expiration} curTime={curTime} />            
        </div>
    );
}

export default Fissure;