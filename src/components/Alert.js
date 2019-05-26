import React from 'react';

/**
 * Component representing an in-game alert.
 * @param {*} props Data associated with one alert.
 */
function Alert(props) {

    return (
        <>
            <span>{props.description}</span>
            <span>{props.id}</span>
            <span>{props.node}</span>
            <span>{props.type}</span>
            
            <span>{props.faction}</span>
            <span>{props.activation}</span>
            <span>{props.rewardItems}</span>
            <span>{props.rewardCredits}</span>
            <span>{props.rewardThumbnail}</span>

            <span>{props.expiration}</span>
        </>
    );
}

export default Alert;