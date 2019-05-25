import React from 'react';

import Invasion from './Invasion';

class Invasions extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        // Call API to get Invasions here.
    }

    render() {

        return (
            <div className="Invasions">
                <h1>This is an Invasions component</h1>
                <ul>
                    <li className="Invasion">Invasions 1</li>
                    <li className="Invasion">Invasions 2</li>
                    <Invasion />
                </ul>
            </div>
        );
    }
}

export default Invasions;