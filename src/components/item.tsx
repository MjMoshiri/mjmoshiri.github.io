import React from 'react';
import { IDataItem } from '../types';

interface ItemProps {
    item: IDataItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.url}>Learn More</a>
        </div>
    );
};

export default Item;
