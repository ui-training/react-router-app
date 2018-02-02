import React from 'react';
import ListingComponent from './ListingComponent';
import CartComponent from './CartComponent';

class MainComponent extends React.Component {

    increment() {
        var test = 'Increment';
        return test;
    }

    render() {

        return (
            <div>
                <ListingComponent/>
                <CartComponent/>
            </div>
        );

    }
}

export default MainComponent;