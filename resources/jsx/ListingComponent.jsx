import React, {Component} from 'react';
import data from '../data-list'
import ListingItem from './ListingItem';

class ListingComponent extends Component {

    render () {
        return (
            <div className="col-sm-8">
                {
                    data.map((item, index) => <ListingItem data={item}/>)
                }
            </div>
        );
    }
}

export default ListingComponent;