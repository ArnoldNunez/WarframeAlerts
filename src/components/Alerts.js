import React from 'react';

import Alert from './Alert';

const API = 'https://api.warframestat.us/{platform}/alerts';

class Alerts extends React.Component {
    constructor(props) {
        super();

        this.state = {
            platform: props.platform,
            alerts: [],
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
            currState.alerts = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log('Problem with fetch operation in: Alerts->componentDidMount');
        });
    }

    render() {
        const { alerts, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const alertComponents = alerts.map((alert) => {
            return (
                <li className='alert-list--item' key={alert.id}>
                    <Alert 
                        id={alert.id}
                        node={alert.mission.node}
                        type={alert.mission.type}
                        activation={alert.activation}
                        expiration={alert.expiry}
                        description={alert.mission.description}
                        faction={alert.mission.faction}
                        rewardItems={alert.mission.reward.items}
                        rewardCredits={alert.mission.reward.credits}
                        rewardThumbnail={alert.mission.reward.thumbnail}
                    />
                </li>
            );
        });
        
        return (
            <div className="alerts">
                <h1>This is an Alerts component</h1>
                <ul className="alert-list">
                    {alertComponents}
                </ul>
            </div>
        );
    }
}

export default Alerts;