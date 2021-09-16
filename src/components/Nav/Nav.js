import React from 'react';
import Styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={Styles.nav} >
            <ul className={Styles.list} >
                <li><a href="#home">home</a></li>    
                <li><a href="#projects">projects</a></li>    
                <li><a href="#contact">contact</a></li>    
            </ul> 
        </nav>
    )
}

export default Nav;
