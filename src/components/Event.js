import React from 'react';

import CountDownTimer from './CountDownTimer';

/**
 * Component representing an in-game event.
 * @param {*} props Data associated with one event.
 */
function Event(props) {

    console.log(props.rewards);

    const rewards = props.rewards.map(reward => {
        let imageUrl = reward.thumbnail;
        let text = reward.asString;
        let altText = `Image for ${text}`;
        let key = reward.asString + reward.credits;

        
        return (
            text &&
            <li key={key} className="event-rewards__item">
                <div>{/*<img src={imageUrl} alt={altText} width="90px" height="90px" />*/} <span>{text}</span></div>
            </li>
        );
    });

    return (
        <div className='event'>
            {/* <div>{props.id}</div> */}
            <div className='cmpt-header-main'>{props.description}</div>
            <div className='cmpt-header-sub'>{props.node}</div>
            
            <div>{props.faction}</div>

            <CountDownTimer activation={props.activation} expiration={props.expiration} />
            
            <ul className="event-rewards">
                {rewards}
            </ul>
        </div>
    );
}

export default Event;