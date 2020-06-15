import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const logMiddleware = () => (next) => (action) => {
    console.log(action.type);
    return next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if(typeof action == 'string') {
        return next({
            type: action
        });
    }

    return next(action);
};

// const stringEnhancer = ( createStore ) => ( ...args ) => {
//     const store = createStore( ...args );
//     const orignalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if(typeof action == 'string') {
//             return orignalDispatch({
//                 type: action
//             });
//         }
    
//         return orignalDispatch(action);
        
//     }

//     return store;
// }

// const logEnhancer  = ( createStore ) => ( ...args ) => {
//     const store = createStore( ...args );
//     const orignalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action.type);
//         return orignalDispatch(action);
//     }

//     return store;
// }

// const store = createStore(reducers, compose(
//     stringEnhancer,
//     logEnhancer));

const store = createStore(reducers, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch('HELLO_WORLD');

export default store;