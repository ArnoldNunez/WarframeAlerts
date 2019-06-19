import React from 'react';

import Invasion from './Invasion';

const API = 'https://api.warframestat.us/{platform}/invasions';

class Invasions extends React.Component {
    constructor(props) {
        super();

        this.state = {
            platform: props.platform,
            invasions: [],
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
            currState.invasions = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log('Problem with fetch operation in: Alerts->componentDidMount');
        });
    }

    render() {
        const { invasions, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const invasionComponents = invasions.map((invasion) => {
            return (
                <li className='invasion-list--item' key={invasion.id}>
                    <Invasion 
                        id={invasion.id}
                        node={invasion.node}
                        activation={invasion.activation}
                        expiration={invasion.expiry}
                        attackingFaction={invasion.attackingFaction}
                        defendingFaction={invasion.defendingFaction}
                        attackerReward={invasion.attackerReward}
                        defenderReward={invasion.defenderReward}
                    />
                </li>
            );
        });
        return (
            <div className="invasions">
                <h1 className="heading-secondary">
                    Invasions
                </h1>
                <ul className="invasion-list">
                    {invasionComponents}
                </ul>
            </div>
        );
    }
}

export default Invasions;