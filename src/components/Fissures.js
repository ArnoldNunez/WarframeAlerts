import React from 'react';

import Fissure from './Fissure';

const API = 'https://api.warframestat.us/{platform}/fissures';

class Fissures extends React.Component {
    constructor(props) {
        super();

        this.state = {
            fissures: [],
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
        }, 60000)
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
            currState.fissures = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log('Problem with fetch operation in: Fissures->componentDidMount', error);
        });
    }

    render() {
        const { fissures, isLoading } = this.state;

        const fissureComponents = fissures.map((fissure) => {
            return (
                <li className='fissure-list--item' key={fissure.id}>
                    <Fissure 
                        id={fissure.id}
                        node={fissure.node}
                        type={fissure.missionType}
                        activation={fissure.activation}
                        expiration={fissure.expiry}
                        
                        faction={fissure.enemy}
                        tier={fissure.tier}
                    />
                </li>
            );
        });

        if (fissureComponents.length > 0) {
            return (
                <div className="fissures group">
                    <h1 className="heading-secondary">
                        Fissures
                    </h1>
                    <ul className="fissure-list">
                        {fissureComponents}
                    </ul>
                </div>
            );
        }

        return <></>;
    }
}

export default Fissures;