import React from 'react';

import Fissure from './Fissure';

const API = 'https://api.warframestat.us/{platform}/fissures';

class Fissures extends React.Component {
    constructor(props) {
        super();

        this.state = {
            platform: props.platform,
            fissures: [],
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
            currState.fissures = data;
            currState.isLoading = false;

            this.setState(currState);
        }).catch(error => {
            console.log(this.state);
            console.log('Problem with fetch operation in: Fissures->componentDidMount', error);
        });
    }

    render() {
        const { fissures, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        console.log("fissures", fissures);

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

        return (
            <div className="Fissures">
                <h1>This is a Fissures component</h1>
                <ul className="fissure-list">
                    {fissureComponents}
                </ul>
            </div>
        );
    }
}

export default Fissures;