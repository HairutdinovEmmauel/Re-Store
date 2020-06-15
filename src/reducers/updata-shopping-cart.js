const updateCartItems = (cartItems, { newItem, itemIndex }) => {

    if(newItem.count == 0) {
        return [
            ...cartItems.slice(0, itemIndex),
            ...cartItems.slice(itemIndex + 1 )
        ];
    }
    
    if (itemIndex == -1) {
        return [
            ...cartItems,
            newItem
        ];
    };

    return [
        ...cartItems.slice(0, itemIndex),
        newItem,
        ...cartItems.slice(itemIndex + 1 )
    ];
};

const updateCartItem = (bookId, state, action) => {

    const { bookList: { books }, shoppingCart: { cartItems, } } = state;

    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const itemDefault = (book, item = {}) => {
        const {
            id = book.id,
            title = book.title,
            count = 0,
            total = 0 } = item;

        return {
            id,
            title,
            count,
            total
        };
    }

    const {
        id,
        title,
        count,
        total} = itemDefault(book, item);

    if(action == 'DECREASE_BOOK_COUNT') {
        return {
            newItem: {
                id: book.id,
                title: book.title,
                count: count - 1,
                total: total - book.price
            },
            itemIndex
        }
        
    }else if(action == 'BOOK_ADDED_TO_CART' || 'INCREASE_BOOK_COUNT') {
        return {
            newItem: {
                id,
                title,
                count: count + 1,
                total: total + book.price    
            },
            itemIndex
        }
    };
};


const updataShoppingCart = (state, action) => {

    if(state == undefined) {
        return {
            cartItems: [],
            orderTotal: 0 
        }
    }

    const {cartItems, orderTotal} = state.shoppingCart;

    switch(action.type) {
        case 'BOOK_ADDED_TO_CART' :

            return {
                orderTotal,
                cartItems: updateCartItems( cartItems, updateCartItem(action.payload, state, action.type) )
            }
        case 'INCREASE_BOOK_COUNT' :

            return {
                orderTotal,
                cartItems: updateCartItems( cartItems, updateCartItem(action.payload, state, action.type) )
            }
        case 'DECREASE_BOOK_COUNT' :

            return {
                orderTotal,
                cartItems: updateCartItems( cartItems, updateCartItem(action.payload, state, action.type) )
            }
        case 'DELETE_BOOK' :

            const id  = cartItems.findIndex(({ id }) => id === action.payload );

            return {
                orderTotal,
                cartItems: [
                    ...cartItems.slice(0, id),
                    ...cartItems.slice(id + 1)
                ]
            };
        default:
            return state.shoppingCart;
    }
};

export default updataShoppingCart;