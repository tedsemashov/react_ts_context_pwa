import React from 'react';
import Modal from "../modal/Modal";
import './card.scss';

interface ICardProps {
    image: string,
    title: string,
    description: string
}

const Card:React.FC<ICardProps> = ({ image, title, description }) => {

    return (
        <div className="card">
            <div data-target="modal1" className="card-image modal-trigger">
                <img alt='product' src={image}/>
                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <Modal />
        </div>
    )
}

export default Card;