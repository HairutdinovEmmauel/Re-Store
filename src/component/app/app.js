import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            
            <Switch>
                <Route path={"/"} component={HomePage} exact/>
                <Route path={"/content"} render={() => <p className='text-center'>Content</p>} />
                {/* <Route path={"/home-page"} component={HomePage} /> */}
                <Route path={"/cart-page"} component={CartPage} />
                <Route render={() => <p>Page not found</p>}/>
            </Switch>
            
        </main>
       
    )       
}

export default App;