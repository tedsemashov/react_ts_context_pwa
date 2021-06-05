import React from 'react';
import revitalashImage from '../../../src/images/parallax/revitalash.jpg';
import zernoImage from '../../../src/images/parallax/zerno.jpg';

interface IParallaxProps {
    title: string,
    text: string,
}

const Parallax:React.FC<IParallaxProps> = ({ title, text }) => (
    <>
        <div className="parallax-container">
            <div className="parallax">
                <img alt='revitalash' src={revitalashImage} />
            </div>
        </div>
        <div className="section white">
            <div className="row container">
                <h2 className="header">{title}</h2>
                <p className="grey-text text-darken-3 lighten-3">{text}</p>
            </div>
        </div>
        <div className="parallax-container">
            <div className="parallax">
                <img alt='zerno' src={zernoImage} />
            </div>
         </div>
    </>
)

export default Parallax;