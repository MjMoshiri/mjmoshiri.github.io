import React from "react";
import {ItemListProps} from "../types";
import sortItemsBySubcategory from "../util/sort";

const Skills: React.FC<ItemListProps> = ({items, title}) => {
    items = sortItemsBySubcategory(items, ["Programming Languages", "Web Development", "Database Management",
        "Development & Design", "DevOps & Infrastructure", "API Design & Management", "Testing & Quality Assurance"]);
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
                        {item.description && <span style={{
                            marginInline: "1rem",
                            display: "block",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            hyphens: "auto",
                            marginTop: "0.5rem",
                        }
                        }>{item.description} </span>}
                    </div>
                );
            })}
        </div>
    );
}
export default Skills;