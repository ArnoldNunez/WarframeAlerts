import React from 'react';

function HeroBox(props) {

    return (
        <div className="hero-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Warframe Alerts</span>
                <span className="heading-primary--main">Never miss a thing</span>
            </h1>
            
            <a href="#" className="btn btn--animated">Events</a>
            <a href="#" className="btn btn--animated">Alerts</a>
            <a href="#" className="btn btn--animated">Invasions</a>
            <a href="#" className="btn btn--animated">Fissures</a>
        </div>
    );
}

export default HeroBox;
