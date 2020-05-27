import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return(
        <div className='contact-info-container'>
            <div className='contact-info-container-inner'>
                <div className='header'>Contact Me!</div>
                <div className='IPM'>
                    <div className='instagram'>
                        <div className='ig'>Instagram: </div>
                        <div><a href='https://www.instagram.com/styaxa/'>@styaxa</a></div>
                    </div>
                    <div >
                        <div>+62010101010</div>
                    </div>
                    <div>
                        <div className='email'>example@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;