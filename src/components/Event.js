import React from 'react';

/**
 * Component representing an in-game event.
 * @param {*} props Data associated with one event.
 */
function Event(props) {

    const rewards = props.rewards.map(reward => {
        let imageUrl = reward.thumbnail;
        let text = reward.asString;
        let altText = `Image for ${text}`;
        let key = reward.asString + reward.credits;
        return (
            <li key={key}>
                <div><span>{text}</span> <img src={imageUrl} alt={altText} width="200px" height="200px" /></div>
            </li>
        );
    });



    return (
        <>
            <div>{props.id}</div>
            <div>{props.description}</div>
            <div>{props.node}</div>
            
            <div>{props.faction}</div>

            <div>{props.activation}</div>
            <div>{props.expiration}</div>
            
            <ul className="event-rewards">
                {rewards}
            </ul>
        </>
    );
}

export default Event;