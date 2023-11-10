import React from 'react';
import Item from './item';
import {IDataItem} from '../types';

interface ItemListProps {
    items: IDataItem[];
    title: string;
}

const ItemList: React.FC<ItemListProps> = ({items, title}) => {
    const sortedItems = items.sort((a, b) => {
        const aSubcategory = a.subcategory || "Others";
        const bSubcategory = b.subcategory || "Others";
        if (aSubcategory === "Others") {
            return 1;
        }
        if (bSubcategory === "Others") {
            return -1;
        }
        if (aSubcategory === bSubcategory) {
            return a.name.localeCompare(b.name);
        }
        return aSubcategory.localeCompare(bSubcategory);
    });

    let subcategory = "";

    return (
        <div>
            <h2>{title}</h2>
            {sortedItems.map((item, index) => {
                const currentSubcategory = item.subcategory || "Others";
                if (currentSubcategory !== subcategory) {
                    subcategory = currentSubcategory;
                    return (
                        <div key={index}>
                            <h3>{subcategory}</h3>
                            <Item key={item.name} item={item}/>
                        </div>
                    );
                }
                return <Item key={item.name} item={item}/>;
            })}
        </div>
    );
};

export default ItemList;