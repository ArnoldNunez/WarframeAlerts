import React from 'react';

/**
 * Component representing an in-game Invasion.
 * @param {*} props Data associated with one Invasion.
 */
function Invasion(props) {

    return (
        <>
            <div>{props.id}</div>
            <div>{props.node}</div>
            
            <div>{props.attackingFaction}</div>
            <div>{props.defendingFaction}</div>
            <div>{props.attackerReward.asString}</div>
            <div>{props.defenderReward.asString}</div>

            <div>{props.activation}</div>
            <div>{props.expiration}</div>
            
            <div>{props.expiration}</div>
        </>
    );
}

export default Invasion;