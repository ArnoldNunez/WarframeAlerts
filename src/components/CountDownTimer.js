import React from 'react';
import ReactDOM from 'react-dom';

class CountDownTimer extends React.Component {
    constructor(props) {
        super();

        this.state = {};
    }


    render() {


        return (
            <div className='cdt'>
                <span>12:34:64</span>
            </div>
        );
    }
}

export default CountDownTimer;