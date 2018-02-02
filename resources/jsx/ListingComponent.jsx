import React, {Component} from 'react';
import data from '../data-list'
import ListingItem from './ListingItem';

class ListingComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data
        };
        this._handleAddToCart = this._handleAddToCart.bind(this);
    }

    render () {
        return (
            <div className="col-sm-8">
                {
                    this.state.data.map((item, index) =>
                        <ListingItem key={index} id={index} data={item} addToCart={this._handleAddToCart}/>)
                }
            </div>
        );
    }

    _handleAddToCart(itemIndex) {

        let dataObj = this.state.data;
        dataObj[itemIndex].addedToCart = true;
        this.setState({data: dataObj})
    }
}

export default ListingComponent;