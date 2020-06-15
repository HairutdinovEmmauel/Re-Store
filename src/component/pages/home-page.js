import React from 'react';
import './style/home-page.css'
import BookList from '../book-list/book-list';
import ShoppingCartTable from '../shopping-cart-table'

const HomePage = () => {
    return(
        <div>
            <BookList />
            <ShoppingCartTable />
        </div>
        
    )
};

export default HomePage;