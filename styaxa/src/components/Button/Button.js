import React from 'react';
import './Button.css';

const Button = ({section, changeGallerySection}) => {
    return(
        <div className='button'>
            <div className='button' onClick={() => changeGallerySection(section)}>{`${section}`}</div>
        </div>
    );
}

export default Button;