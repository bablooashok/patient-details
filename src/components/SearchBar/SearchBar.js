import React from 'react'
import './search-bar.css';
import searchIcon from './search-icon.svg'

function SearchBar(props) {

    return (
        <div className="search-bar">
            <input type="search" name="course-search" id="search-input" placeholder="Search here" />
            <img  src={searchIcon} alt="search" />
        </div>
    );
}
export default SearchBar;