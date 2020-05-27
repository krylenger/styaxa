import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className='header bg-image'>
            <a href='/' className='header-title'>styxa</a>
            <div className='introduction'>
                <div className='introduction-half'>
                    
                </div>
                <div className='introduction-half introduction-half-right'>
                    <h1 >Welcome To My Online Portfolio!</h1>
                    <h2>
                        Capturing your most precious moments. 
                        <br></br>
                        Wealth of experience in photography.
                    </h2>
                </div>
                
                
            </div>
        </header>
    );
}

export default Header;