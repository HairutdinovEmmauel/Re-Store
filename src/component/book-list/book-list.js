import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';

import {
    booksLoaded,
    booksRequresd,
    booksError,
    onAddToCart
} from '../../actions'

import BookListItem from '../book-list-item/book-list-item';
import { compose } from '../../utils'
import { withBoostoreService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddToCart }) => {
    books.map((book) => console.log('huk', book));
    return (
        <ul className="book-list">
            {      
                books.map(
                    (book) => {
                        return <li key={book.id}><BookListItem book={book} onAddToCart={onAddToCart}/></li> 
                    }
                )
            }
        </ul>
        
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddToCart} = this.props;

        console.log(books);

        if(loading) {
            return <Spinner />;
        }
        if(error) {
            return <ErrorIndicator />
        }

        console.log(error);

        return <BookList books={books} onAddToCart={onAddToCart} />
    }
}

const mapStateToProps = ({ bookList:  { books, loading, error } }) => {
    return { books, loading, error } 
}

const mapDispatctToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {

            const { bookstoreService } = ownProps;
            
            dispatch(booksRequresd());

            bookstoreService.getBooks()
                .then((data) => {
                    dispatch(booksLoaded(data));
                })
                .catch((err) => dispatch(booksError(err)));

        },
        onAddToCart: (id) => dispatch(onAddToCart(id))
    }
    
}

export default compose(
    withBoostoreService(),
    connect(mapStateToProps, mapDispatctToProps)
    )(BookListContainer);