import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="footer">

            <div className="footer-content">
            <span className="copyright">&copy; 2021</span>made using <span className="next-link"><a href="https://nextjs.org/" target="_blank"><p>Next.JS</p></a></span> And Check
            </div>

            <div className="social-links">
                <a href={"https://github.com/DaffaAdityaDev/Netflix_dumy"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
}

export default Footer;