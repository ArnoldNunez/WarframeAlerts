import React from 'react';

import Event from './Event';

class Events extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        // Call API to get Events here.
    }

    render() {

        return (
            <div className="Events">
                <h1>This is an Events component</h1>
                <ul>
                    <li className="Event">Event 1</li>
                    <li className="Event">Event 2</li>
                    <Event />
                </ul>
            </div>
        );
    }
}

export default Events;