import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super();

        this.state = {
            platform: props.platform,
            navBtnHandler: props.platChangeHandler,
            activeBtn: 'pc'
        }

        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(e) {
        let platform = e.target.value;
        this.setState({...this.state, activeBtn: platform});
        this.state.navBtnHandler(e.target.value);
    }

    render() {

        return (
            <header className="header--main">
                <nav className="navigation">
                    <ul>
                        <li><button onClick={this.handleNavClick} value="pc">pc</button></li>
                        <li><button onClick={this.handleNavClick} value="ps4">ps4</button></li>
                        <li><button onClick={this.handleNavClick} value="xb1">xbox</button></li>
                        <li><button onClick={this.handleNavClick} value="swi">switch</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;