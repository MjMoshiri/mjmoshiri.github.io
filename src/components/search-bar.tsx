import React from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search..."
        />
    );
};

export default SearchBar;
