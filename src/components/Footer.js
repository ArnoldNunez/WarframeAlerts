import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {

    return (
        <footer className="footer">
            <div className="legal">&copy; 2017 Arnold Nunez. All rights reserved.</div>
            <div className="social-mda">
                    <span className="social-mda__link"><a href="https://github.com/ArnoldNunez" className="git">Github</a></span>
                    <span className="social-mda__link"><a href="https://www.linkedin.com/in/arnold-nunez-70099ba4" className="lnkin">LinkedIn</a></span>
            </div>
        </footer>
    );
}

export default Footer;