import React from 'react';


import shoppingLogo from '../../assets/shoppingcart.jpg';
import classes from './Logo.css';

const Logo=(props)=>(
    
    <div className={classes.Logo}>
        <img 
        src={shoppingLogo}
        alt='MyLogo'
        />
    </div>
);

export default Logo;