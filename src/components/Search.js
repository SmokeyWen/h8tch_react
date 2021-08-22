import React from 'react'

const Search = (props) => {
    return (
        <div id="search-area">
            <input id="search-input" className="form-control" placeholder="Search" onChange = {(e) => props.onChange(e)} />
        </div>
    )
}

export default Search
