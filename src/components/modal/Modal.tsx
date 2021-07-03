import React, {useEffect} from 'react';
import M from "materialize-css";

// interface IModalProps {
//     image: string,
//     title: string,
//     description: string
// }

const Modal:React.FC = () => {
    useEffect(() => {
        M.Modal.init(document.querySelectorAll('.modal'));
    }, [])

    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
                <p>Price: 200</p>
            </div>
        </div>
    )
}

export default Modal;