import React from 'react';
import ReactDOM from 'react-dom';

function ProgressBar(props) {
    const completion = props.completion;
    const height = props.height;
    const attackerCol = props.atkCol ? props.atkCol : '#d30000';
    const defenderCol = props.defCol ? props.defCol : '#136387';


    let styles = {
        containerStyle: {
            height: height,
            display: 'flex',
            border: 'thin solid black',
            borderRadius: '15px',
            overflow: 'hidden'
            
        },
        attackerStyle: {
            backgroundColor: attackerCol,
            width: completion + '%',
            MozBorderRadius: '15px 15px 0 0'
            
        },
        defenderStyle: {
            backgroundColor: defenderCol,
            width: 100 - completion + '%',
            MozBorderRadius: '15px 15px 0 0'
        }
    }


    return (
        <div className="progress-bar" style={styles.containerStyle}>
            <div className="progress-bar__attacker" style={styles.attackerStyle}></div>
            <div className="progress-bar__defender" style={styles.defenderStyle}></div>
        </div>
    );
}

export default ProgressBar;