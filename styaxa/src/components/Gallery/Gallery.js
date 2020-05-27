import React from 'react';
import './Gallery.css';


function importAllImages(r) {
    return r.keys().map(r);
  }
const imagesMain = importAllImages(require.context('../../pics/main/', false, /\.(png|jpe?g|svg)$/));
const imagesChildren = importAllImages(require.context('../../pics/children/', false, /\.(png|jpe?g|svg)$/));
const imagesPortret = importAllImages(require.context('../../pics/portret/', false, /\.(png|jpe?g|svg)$/));
const imagesLove = importAllImages(require.context('../../pics/love/', false, /\.(png|jpe?g|svg)$/));
const imagesNude = importAllImages(require.context('../../pics/nude/', false, /\.(png|jpe?g|svg)$/));

  

const Gallery = ({section}) => {
    let imagesSource;
    

    switch(section) {
        case 'Children' : {
            imagesSource = imagesChildren;
            break;
        }
        case 'Love' : {
            imagesSource = imagesLove;
            break;
        }
        case 'Main' : {
            imagesSource = imagesMain;
            break;
        }
        case 'Portret' : {
            imagesSource = imagesPortret;
            break;
        }
        case 'Nude' : {
            imagesSource = imagesNude;
            break;
        }
    }
    console.log(imagesSource);
    
    return(
        <div className='gallery-container'>

            <div className='gallery-column'>
                <div className='img-1-2'>
                    <img src={imagesSource[0]} alt={'image_1'} />
                </div>
                <div className='img-1-2'>
                    <img src={imagesSource[1]} alt={'image_2'} />
                </div>
            </div>
            <div className='gallery-column'>
                <div className='img-1-3'>
                    <img src={imagesSource[2]} alt={'image_3'} />
                </div>
                <div className='img-1-3'>
                    <img src={imagesSource[3]} alt={'image_4'} />
                </div>
                <div className='img-1-3'>
                    <img src={imagesSource[4]} alt={'image_5'} />
                </div>
            </div>
            <div className='gallery-column'>
                <div className='img-1-2 img-1-2-3'>
                    <img src={imagesSource[5]} alt={'image_6'} />
                </div>
                <div className='img-1-2 img-1-2-3'>
                    <img src={imagesSource[6]} alt={'image_7'} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;