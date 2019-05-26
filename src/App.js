import React from 'react';

// Warframe worldstate API: https://docs.warframestat.us/#tag/worldstate

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
    }

    render() {
        const platform = this.state.platform;

        return (
            <div className="content">
                <h1>Hello World from React Boilerplate</h1>

                <Alerts platform={platform}/>
                <Events />
                <Fissures />
                <Invasions />
            </div>
        )
    }
}

export default App;