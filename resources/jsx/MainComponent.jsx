import React from 'react';
import ListingComponent from './ListingComponent';
import CartComponent from './CartComponent';
import { Route, Link } from 'react-router-dom';

class MainComponent extends React.Component {

    increment() {
        var test = 'Increment';
        return test;
    }

    render() {

        return (
            <div>
                <nav>
                    <Link to="/listing">Listing</Link>
                    <Link to="/cart">Cart</Link>
                </nav>

                <Route path="/listing" component={ListingComponent}/>
                <Route path="/cart" component={CartComponent}/>
            </div>
        );

    }
}

export default MainComponent;