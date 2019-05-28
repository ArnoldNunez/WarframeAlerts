import React from 'react';

// Warframe worldstate API: https://docs.warframestat.us/#tag/worldstate

import Header from './components/Header';
import HeroBox from './components/HeroBox';
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
                <Header platChangeHandler={this.changePlatform} />
                <HeroBox />

                <Alerts platform={platform} />
                <Events platform={platform} />
                <Fissures platform={platform} />
                <Invasions platform={platform} />
            </div>
        )
    }
}

export default App;