import {Link} from "gatsby";
import * as React from "react";
import logo from "../../images/logo.svg";

const HeaderMobile = ({handleMenu}) => (
    <div className="vw-container hidden-more-sm">
        <div className="header-inner">
            <div className="header-item">
                <button onClick={handleMenu} className="menuToggle" aria-label="Show Navigation Menu" aria-expanded="false"
                        tabIndex="0">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="#000" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66659 0.000100008C1.53407 -0.00177404 1.40251 0.0227071 1.27954 0.0721209C1.15658 0.121535 1.04465 0.194895 0.950284 0.28794C0.855915 0.380984 0.780978 0.491857 0.729831 0.614114C0.678683 0.736372 0.652344 0.867575 0.652344 1.0001C0.652344 1.13263 0.678683 1.26383 0.729831 1.38609C0.780978 1.50834 0.855915 1.61922 0.950284 1.71226C1.04465 1.8053 1.15658 1.87867 1.27954 1.92808C1.40251 1.97749 1.53407 2.00197 1.66659 2.0001H26.3333C26.4658 2.00197 26.5973 1.97749 26.7203 1.92808C26.8433 1.87867 26.9552 1.8053 27.0496 1.71226C27.1439 1.61922 27.2189 1.50834 27.27 1.38609C27.3212 1.26383 27.3475 1.13263 27.3475 1.0001C27.3475 0.867575 27.3212 0.736372 27.27 0.614114C27.2189 0.491857 27.1439 0.380984 27.0496 0.28794C26.9552 0.194895 26.8433 0.121535 26.7203 0.0721209C26.5973 0.0227071 26.4658 -0.00177404 26.3333 0.000100008H1.66659ZM1.66659 9.0001C1.53407 8.99823 1.40251 9.02271 1.27954 9.07212C1.15658 9.12154 1.04465 9.1949 0.950284 9.28794C0.855915 9.38099 0.780978 9.49186 0.729831 9.61411C0.678683 9.73637 0.652344 9.86758 0.652344 10.0001C0.652344 10.1326 0.678683 10.2638 0.729831 10.3861C0.780978 10.5083 0.855915 10.6192 0.950284 10.7123C1.04465 10.8053 1.15658 10.8787 1.27954 10.9281C1.40251 10.9775 1.53407 11.002 1.66659 11.0001H26.3333C26.4658 11.002 26.5973 10.9775 26.7203 10.9281C26.8433 10.8787 26.9552 10.8053 27.0496 10.7123C27.1439 10.6192 27.2189 10.5083 27.27 10.3861C27.3212 10.2638 27.3475 10.1326 27.3475 10.0001C27.3475 9.86758 27.3212 9.73637 27.27 9.61411C27.2189 9.49186 27.1439 9.38099 27.0496 9.28794C26.9552 9.1949 26.8433 9.12154 26.7203 9.07212C26.5973 9.02271 26.4658 8.99823 26.3333 9.0001H1.66659ZM1.66659 18.0001C1.53407 17.9982 1.40251 18.0227 1.27954 18.0721C1.15658 18.1215 1.04465 18.1949 0.950284 18.2879C0.855915 18.381 0.780978 18.4919 0.729831 18.6141C0.678683 18.7364 0.652344 18.8676 0.652344 19.0001C0.652344 19.1326 0.678683 19.2638 0.729831 19.3861C0.780978 19.5083 0.855915 19.6192 0.950284 19.7123C1.04465 19.8053 1.15658 19.8787 1.27954 19.9281C1.40251 19.9775 1.53407 20.002 1.66659 20.0001H26.3333C26.4658 20.002 26.5973 19.9775 26.7203 19.9281C26.8433 19.8787 26.9552 19.8053 27.0496 19.7123C27.1439 19.6192 27.2189 19.5083 27.27 19.3861C27.3212 19.2638 27.3475 19.1326 27.3475 19.0001C27.3475 18.8676 27.3212 18.7364 27.27 18.6141C27.2189 18.4919 27.1439 18.381 27.0496 18.2879C26.9552 18.1949 26.8433 18.1215 26.7203 18.0721C26.5973 18.0227 26.4658 17.9982 26.3333 18.0001H1.66659Z" fill="black"/>
</svg>


                </button>
            </div>
            <div className="header-item">
                <Link to={"/"}>
                    <img
                        className="header-logo"
                        src={logo}
                        alt="Slotwinners"
                        width={288}
                        height={62}
                    />
                </Link>
            </div>
        </div>
    </div>
);

export default HeaderMobile;
