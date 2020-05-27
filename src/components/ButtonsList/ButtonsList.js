import React from 'react';
import Button from '../Button/Button'
import './ButtonsList.css';

const ButtonsList = ({changeGallerySection}) => {
    
    
    return(
        <div className='buttons-list'>
            <Button section={'Children'} changeGallerySection={changeGallerySection}/>
            <Button section={'Love'} changeGallerySection={changeGallerySection}/>
            <Button section={'Main'} changeGallerySection={changeGallerySection}/>
            <Button section={'Portret'} changeGallerySection={changeGallerySection}/>
            <Button section={'Nude'} changeGallerySection={changeGallerySection}/>
        </div>
    );
}

export default ButtonsList;