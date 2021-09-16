import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {

    const sendEmail = () => {
        document.location = "mailto:cgomez37484@gmail.com";
    }
    return (
        <footer className={Styles.footer} id={'contact'}>
            <h2>Let's work together...</h2>
            <ul>
                <li><a href="https://github.com/cgomez374" target='_blank' ><i class="fab fa-github fa-2x"></i></a></li>
                <li onClick={sendEmail}><a href="#" ><i class="fas fa-envelope fa-2x"></i></a></li>
                {/* <li><a href="#"><i class="fas fa-phone-square fa-2x"></i></a></li> */}
            </ul>
        </footer>
    )
}

export default Footer
