import React from 'react';
import {Link} from "gatsby";

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className='vw-container'>
                <div className='footer-inner'>
                    <div className="footer-info">
                        <h3 className={`footer-title`}>About Us</h3>
                        <p>
                            All rights reserved for Slotfinders, {new Date().getFullYear()}. Slotfinders discourages gambling and real money gambling is not possible on any of Slotfinders games. Provided by Slotfinders. Practice or success at social casino gaming does not imply future success at real money gambling or gaming.
                        </p>
                    </div>
                    <div className="footer-contact">
                        <h3 className={`footer-title`}>Information</h3>
                        <ul className="footer-contact-list list-style-reset">
                            <li>
                                <Link to={`/privacy`}>
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link to={`/privacy`}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
