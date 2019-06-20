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
            <header className="header header--main">
                <div className="header__logo-box">
                    <span className="header__logo">Warframe Alerts</span>
                </div>
                <nav className="platform-nav">
                    <div className="platform-nav__box">
                        <button className="platform-nav__box-btn btn-selected" onClick={this.handleNavClick} value="pc">pc</button>
                    </div>
                    
                    <div className="platform-nav__box">
                        <button className="platform-nav__box-btn" onClick={this.handleNavClick} value="ps4">ps4</button>
                    </div>
                    
                    <div className="platform-nav__box">
                        <button className="platform-nav__box-btn" onClick={this.handleNavClick} value="xb1">xbox</button>
                    </div>
                    
                    <div className="platform-nav__box">
                        <button className="platform-nav__box-btn" onClick={this.handleNavClick} value="swi">switch</button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;