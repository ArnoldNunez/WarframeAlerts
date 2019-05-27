import React from 'react';

import Event from './Event';

const API = 'https://api.warframestat.us/{platform}/events';

class Events extends React.Component {
    constructor(props) {
        super();

        this.state = {
            platform: props.platform,
            events: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        let url = API.replace('{platform}', this.state.platform);

        fetch(url, {
            method: 'GET',
            mode: 'cors'
        }).then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Network response was not okay');
        }).then(data => {
            let currState = this.state;
            currState.events = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log('Problem with fetch operation in: Alerts->componentDidMount');
        });
    }

    render() {
        const { events, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const eventComponents = this.state.events.map((e) => {
            return (
                <li className='event-list--item' key={e.id}>
                    <Event 
                        id={e.id}
                        node={e.node}
                        expiration={e.expiry}
                        activation={e.activation}
                        description={e.description}
                        faction={e.faction}
                        rewards={e.rewards}
                    />
                </li>
            );
        });
        
        return (
            <div className="events">
                <h1>This is an Events component</h1>
                <ul className="event-list">
                    {eventComponents}
                </ul>
            </div>
        );
    }
}

export default Events;