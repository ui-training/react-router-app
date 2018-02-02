import React, {Component} from 'react';
import './ListingItem.less';

class ListingItemComponent extends Component {

    render () {

        let item = this.props.data || {};

        return (
            <div className='listing-item card'>

                <div className="card-preview">
                    <img src={item.imageUrl} alt=""/>
                </div>

                <div className="card-details">
                    <div className='item-title'>{item.title}</div>
                    <div className='item-subtitle'>{item.description}</div>
                </div>

                <div className="card-footer">
                    <div className='item-price'>{item.price}</div>
                    {
                        this.getCartStatus(item.addedToCart)
                    }

                </div>
            </div>
        );
    }

    getCartStatus(isItemAdded) {

        if(isItemAdded) {
            return <div>Added to Cart</div>;
        }  else {
            return <div className='btn btn-success' onClick={e => this.props.addToCart(this.props.id)}>Add to cart</div>;
        }
    }
}

export default ListingItemComponent;