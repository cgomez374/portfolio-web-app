import React from 'react';
import Styles from './Header.module.css';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className={Styles.header} id={'home'} >
            {/* NAVIGATION */}
            {/* <Nav /> */}
            {/* SHOWCASE */}
            {/* <div className={Styles.showcase}>
                <h1>hey i'm carlos</h1>
                <h3>software engineer</h3>
            </div> */}
        </header>
    )
}

export default Header;
