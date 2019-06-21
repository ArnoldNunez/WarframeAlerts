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
        }, 1000 * 60 * 3)
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
            currState.invasions = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log('Problem with fetch operation in: Alerts->componentDidMount');
        });
    }

    render() {
        const { invasions, isLoading } = this.state;

        const invasionComponents = invasions.map((invasion) => {
            if (!invasion.completed) {
                return (
                    <li className='invasion-list--item' key={invasion.id}>
                        <Invasion 
                            id={invasion.id}
                            desc={invasion.desc}
                            node={invasion.node}
                            attackingFaction={invasion.attackingFaction}
                            attackerReward={invasion.attackerReward}
                            defendingFaction={invasion.defendingFaction}
                            defenderReward={invasion.defenderReward}
                            completion={invasion.completion}
                        />
                    </li>
                );
            }
        });

        if (invasionComponents.length > 0) {
            return (
                <div className="invasions group">
                    <h1 className="heading-secondary">
                        Invasions
                    </h1>
                    <ul className="invasion-list">
                        {invasionComponents}
                    </ul>
                </div>
            );
        }

        return <></>;
    }
}

export default Invasions;