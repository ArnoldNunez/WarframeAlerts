import React from 'react';

import Alert from './Alert';

class Alerts extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        // Call API to get alerts here.
    }

    render() {

        return (
            <div className="Alerts">
                <h1>This is an Alerts component</h1>
                <ul>
                    <li className="Alert">Alert 1</li>
                    <li className="Alert">Alert 2</li>
                    <Alert />
                </ul>
            </div>
        );
    }
}

export default Alerts;