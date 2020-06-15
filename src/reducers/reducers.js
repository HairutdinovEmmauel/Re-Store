import updataBookList from './updata-book-list';
import updataShoppingCart from './updata-shopping-cart';

const reducer = (state, action) => {
    return {
        bookList: updataBookList(state, action),
        shoppingCart: updataShoppingCart(state, action)
    }
};

export default reducer;