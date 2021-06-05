import React from 'react';
import './card.scss';

interface ICardProps {
    image: string,
    title: string,
    description: string
}

const Card:React.FC<ICardProps> = ({ image, title, description }) => (
    <div className="card">
        <div className="card-image">
            <img alt='product' src={image}/>
            <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
            <p>{description}</p>
        </div>
    </div>
)

export default Card;