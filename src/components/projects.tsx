import React from "react";
import {ItemListProps} from "../types";
import {BiLinkExternal} from "react-icons/bi";

const Projects: React.FC<ItemListProps> = ({items, title}) => {
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
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <BiLinkExternal/>
                            </a>

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

export default Projects;