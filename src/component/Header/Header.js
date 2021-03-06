import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1><img src={logo} alt=""/> </h1>
              <nav>
            <a href="/shop">Shop</a>
            <a href="/order-review">Order Review </a>
            <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
      
    );
};

export default Header;
