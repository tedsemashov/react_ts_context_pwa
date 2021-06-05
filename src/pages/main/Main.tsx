import React, { useEffect } from 'react';
import './main.scss';
import M from 'materialize-css';
import Parallax from '../../components/parallax/Parallax';
import { MAIN_TEXT, ODE_BEAUTY_SPACE } from '../../constants/texts';

export const Main:React.FC = () => {

    useEffect(() => { M.Parallax.init(document.querySelectorAll('.parallax'))}, [])

    return (
        <main>
            <Parallax
                title={ODE_BEAUTY_SPACE}
                text={MAIN_TEXT}
            />
        </main>
    );
}
