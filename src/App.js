import React from 'react';

// Warframe worldstate API: https://docs.warframestat.us/#tag/worldstate

import Header from './components/Header';
import Alerts from './components/Alerts';
import Events from './components/Events';
import Fissures from './components/Fissures';
import Invasions from './components/Invasions';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            platform: 'pc'
        }

        this.changePlatform = this.changePlatform.bind(this);
    }

    changePlatform(platform) {
        this.setState({
            platform: platform
        });
    }

    render() {
        const platform = this.state.platform;

        return (
            <div className="content">
                <h1>Hello World from React Boilerplate</h1>

                <Header platChangeHandler={this.changePlatform} />
                <Alerts platform={platform} />
                <Events platform={platform} />
                <Fissures platform={platform} />
                <Invasions platform={platform} />
            </div>
        )
    }
}

export default App;