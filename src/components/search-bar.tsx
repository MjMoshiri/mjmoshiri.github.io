import React from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <div>
            <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Backend, DevOps, Cloud"
                style={
                    {
                        width: "50%",
                        padding: "0.5rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #ff0000",
                    }
                }
            />
        </div>
    );
};

export default SearchBar;
