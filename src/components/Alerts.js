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

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.platform !== prevProps.platform) {
            this.fetchData(this.props.platform);
        }
    }

    componentDidMount() {
        this.fetchData(this.props.platform);
        this.interval = setInterval(() => {
            this.fetchData(this.props.platform);
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
            currState.alerts = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log('Problem with fetch operation in: Alerts->componentDidMount');
        });
    }

    render() {
        const { alerts, isLoading } = this.state;

        const alertComponents = alerts.map((alert) => {
            return (
                <li className='alert-list--item' key={alert.id}>
                    <Alert className='alert'
                        id={alert.id}
                        node={alert.mission.node}
                        type={alert.mission.type}
                        activation={alert.activation}
                        expiration={alert.expiry}
                        description={alert.mission.description}
                        faction={alert.mission.faction}
                        rewardString={alert.reward.asString}
                        rewardItems={alert.mission.reward.items}
                        rewardCredits={alert.mission.reward.credits}
                        rewardThumbnail={alert.mission.reward.thumbnail}
                    />
                </li>
            );
        });

        if (alertComponents.length > 0) {
            return (
                <div className="alerts group">
                    <h2 className="heading-secondary">
                        Alerts
                    </h2>
                    <ul className="alert-list">
                        {alertComponents}
                    </ul>
                </div>
            );
        }

        
        return <></>;
    }
}

export default Alerts;