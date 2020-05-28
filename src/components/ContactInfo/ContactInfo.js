import React from 'react';
import './ContactInfo.css';
import logoInstagram from '../../pics/logos/0817158f3a05c0d62de647c28f4cde54.jpg';

const ContactInfo = () => {
    return(
        <div className='contact-info-container'>
            <div className='contact-info-container-inner'>
                <div className='header-contact'>Contact Me!</div>
                <div className='IPM'>
                    <div className='IPM-section'>
                    <div className='logo phone'></div>
                        <div>+62010101010</div>
                    </div>
                    <div className='IPM-section instagram'>
                        <div className='logo'><a href='https://www.instagram.com/styaxa/'>@styaxa</a></div>
                        <div className='ig'> 
                            <a href='https://www.instagram.com/styaxa/'>@styaxa</a> 
                        </div>
                    </div>
                    <div className='IPM-section'>
                    <div className='logo mail'></div>
                        <div className='email'>example@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;