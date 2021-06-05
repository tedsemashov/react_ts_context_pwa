import React, { useEffect } from 'react';
import { NAV_TABS } from '../../constants/texts';
import M from 'materialize-css';
import './header.scss';

const { PRODUCTS, MAIN } = NAV_TABS;

export const Header:React.FC = () => {

    useEffect(() => {
        M.Sidenav.init(document.querySelectorAll('.sidenav'))
    }, [])

    return (
        <header>
            <nav className='nav-background'>
                <div className="nav-wrapper #bcaaa4 brown lighten-3">
                    <a href="/" className="brand-logo">ODE</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="medium material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href='/'>{ MAIN }</a></li>
                        <li><a href='/products'>{ PRODUCTS }</a></li>
                    </ul>
                </div>

                <ul className="sidenav brown lighten-3" id="mobile-demo">
                    <li><a href='/' className="white-text">{ MAIN }</a></li>
                    <li><a href='/products' className="white-text">{ PRODUCTS }</a></li>
                </ul>


                {/*<div className="nav-wrapper #bcaaa4 brown lighten-3">*/}
                {/*    <a href="/" className="brand-logo">ODE</a>*/}
                {/*    <ul id="nav-mobile" className="right hide-on-med-and-down">*/}
                {/*        <li><a href='/'>{ MAIN }</a></li>*/}
                {/*        <li><a href='/products'>{ PRODUCTS }</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </nav>
        </header>
    );
}
