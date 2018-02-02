import React, {Component} from 'react';

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
                </div>
            </div>
        );
    }
}

export default ListingItemComponent;