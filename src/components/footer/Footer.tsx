import React from 'react';

export const Footer:React.FC = () => {
    return (
        <footer className="page-footer brown lighten-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your
                            footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/ode.beautyspace/">Instagram</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/OdeBeautySpace/">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright center">
                <div className="container">
                    © 2021 Copyright ODE
                </div>
            </div>
        </footer>
    )
}
