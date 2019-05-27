import React from 'react';

/**
 * Component representing an in-game relic Fissure.
 * @param {*} props Data associated with one Fissure.
 */
function Fissure(props) {

    return (
        <>
            <div>{props.id}</div>
            <div>{props.node}</div>
            <div>{props.type}</div>
            <div>{props.activation}</div>
            <div>{props.expiration}</div>
            <div>{props.faction}</div>
            <div>{props.tier}</div>
        </>
    );
}

export default Fissure;