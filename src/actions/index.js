export const booksLoaded = ( newBooks ) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

export const booksRequresd = () => {
    return {
        type: 'FETCH_BOOKS_REQUREST'
    }
}

export const booksError = ( error ) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const onAddToCart = ( bookId ) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const onIncrease = ( bookId ) => {
    return {
        type: 'INCREASE_BOOK_COUNT',
        payload: bookId
    };
};

export const onDecrease = ( bookId ) => {
    return {
        type: 'DECREASE_BOOK_COUNT',
        payload: bookId
    };
};

export const onDelete = ( bookId ) => { 
    return {
        type: 'DELETE_BOOK',
        payload: bookId
    };
};

export const imp = () => {
    return  {
        type: 'IMP',
        payload: (background) => {
            let state = !background;
            if(state) {
                return 'important'; 
            } else {
                return;
            }
        }
    }
}

