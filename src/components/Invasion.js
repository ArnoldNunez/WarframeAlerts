import React from 'react';

/**
 * Component representing an in-game Invasion.
 * @param {*} props Data associated with one Invasion.
 */
function Invasion(props) {
    return (
        <div className="invasion">
            <div className="cmpt-header-main center-text">{props.desc}</div>
            <div className="cmpt-header-sub center-text">{props.node}</div>
            
            <div className="invasion__sides">
                <div className="invasion__sides--left">
                    <div>{props.attackingFaction}</div>
                    <div>{props.attackerReward.asString}</div>
                </div>
                
                <div className="invasion__sides--right">
                    <div>{props.defendingFaction}</div>
                    <div>{props.defenderReward.asString}</div>
                </div>
            </div>
            <div>{props.completion}</div>
        </div>
    );
}

export default Invasion;