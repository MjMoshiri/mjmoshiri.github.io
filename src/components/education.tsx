import React from "react";
import {ItemListProps} from "../types";
import {BiLinkExternal} from "react-icons/bi";
import sortItemsBySubcategory from "../util/sort";

const Education: React.FC<ItemListProps> = ({items, title}) => {
    items = sortItemsBySubcategory(items, ["Courses", "Books"]);
    let subcategory = "";
    return (
        <div>
            <h2>{title}</h2>
            {items.map((item, index) => {
                const isNewSubcategory = item.subcategory !== subcategory;
                if (isNewSubcategory) {
                    subcategory = item.subcategory || "";
                }
                return (
                    <div key={index} style={{marginTop: "1rem"}}>
                        {isNewSubcategory && <h3>{subcategory}</h3>}
                        <span>{item.name} </span>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal/>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};
export default Education;

