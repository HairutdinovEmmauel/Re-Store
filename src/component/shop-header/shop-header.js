import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row" >
            <div className='logo text-dark'>
                <Link to={'/'} >RE-Store</Link>
            </div>
            <Link to={'cart-page/'}>
                <span className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart">
                        {numItems} Items (${total})
                    </i>
                </span>
            </Link>
            
        </header>
        
    );
}

export default ShopHeader;