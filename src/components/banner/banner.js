import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Banner = () => {
    return (
        <div className="banner vw-grid vw-grid-col-2">
            <div className="banner-item has-img">
                <StaticImage
                    src="../../images/hero.png"
                    alt="Fun slot games online for free!"
                    width={512}
                    height={572}
                    placeholder={`blur`}
                    className="hidden-less-sm"
                />
                <StaticImage
                    src="../../images/hero-mobile.png"
                    alt="Fun slot games online for free!"
                    width={512}
                    height={572}
                    placeholder={`blur`}
                    className="hidden-more-sm"
                />
            </div>
            <div className="banner-item">
                <h1 className='banner-title'>Casino experience without a risk</h1>
                <h4 className='banner-subtitle'>
                    Online gaming at its finest with new slot games every week! Start playing without registration.
                </h4>
            </div>
        </div>
    )
};

export default Banner;
