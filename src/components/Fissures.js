import React from 'react';

import Fissure from './Fissure';

class Fissures extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        // Call API to get Fissures here.
    }

    render() {

        return (
            <div className="Fissures">
                <h1>This is a Fissures component</h1>
                <ul>
                    <li className="Fissure">Fissure 1</li>
                    <li className="Fissure">Fissure 2</li>
                    <Fissure />
                </ul>
            </div>
        );
    }
}

export default Fissures;