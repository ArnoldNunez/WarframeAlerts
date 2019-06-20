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

    componentDidUpdate(prevProps) {
        if (this.props.platform !== prevProps.platform) {
            this.fetchData(this.props.platform);
        }
    }

    componentDidMount() {
        this.fetchData(this.props.platform);
    }

    fetchData(platform) {
        this.setState({ isLoading: true });

        let url = API.replace('{platform}', platform);

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
                    <Event className='event'
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
            <div className="events group">
                <h1 className="heading-secondary">
                    Events
                </h1>
                <ul className="event-list">
                    {eventComponents}
                </ul>
            </div>
        );
    }
}

export default Events;