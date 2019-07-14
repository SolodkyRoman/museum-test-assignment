import React from 'react';
import './search-form.css';

const SearchForm = () => {
    return (
        <form 
            onSubmit={(e) => {e.preventDefault()}}
            className="search">
            <select className="search__order custom-select">
                Order by: Type
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <div className="search__form-group">
                <input 
                    type="text" 
                    placeholder="Search keyword..." 
                    className="search__field form-control" />
                <button className="search__submit btn btn-primary">
                    Search
                </button> 
            </div>
        </form>
    );
};

export default SearchForm;
