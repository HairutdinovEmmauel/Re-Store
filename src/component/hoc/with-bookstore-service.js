import React from 'react';
import {
    BookstoreServiceConsumer
} from '../bookstore-service-context'
import ErrorBoundry from '../error-boundry'; 

const withBoostoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <ErrorBoundry>
                <BookstoreServiceConsumer>
                    {
                        (bookstoreService) => {
                            return ( <Wrapped { ... props }  
                            bookstoreService={bookstoreService}/> );
                        }
                    }
                </BookstoreServiceConsumer>
            </ErrorBoundry>
            
        );
    };
};

export default withBoostoreService;