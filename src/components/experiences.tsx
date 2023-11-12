import React from "react";
import {ItemListProps} from "../types";


const Experiences: React.FC<ItemListProps> = ({items, title}) => {
    items = items.sort((a, b) => {
        if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
    });
    return (
        <div>
            <h2>{title}</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} style={{marginTop: "1rem"}}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginInline: "2rem",

                        }}>
                            <h3>{item.name} </h3>
                            <span>{item.date} </span>
                        </div>
                        <span style={{
                            textAlign: "left",
                            marginInline: "2rem",
                            display: "block",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            hyphens: "auto",
                        }}>{item.description} </span>
                    </div>
                );
            })}
        </div>
    );
}
export default Experiences;