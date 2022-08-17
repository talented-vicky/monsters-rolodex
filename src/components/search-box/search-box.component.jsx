import React from "react";
import './search-box.styles.css';

export const SearchBox = ({placeholder, checkChange}) => (
    <input 
        className="search"
        type='search' 
        placeholder={placeholder} 
        onChange={checkChange}
    />
)