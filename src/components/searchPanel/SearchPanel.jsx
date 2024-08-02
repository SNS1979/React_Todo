import React from 'react';
import '../itemStatusFilter/item-status-filter'
import ItemStatusFilter from '../itemStatusFilter/item-status-filter';

const SearchPanel = (props) => {
    const {activ, done, searchInput, setSearchInput, searchStatus, setStatus} = props
    return (
        <div>
            <input 
                placeholder="search"
                onChange={(e) => {
                    setSearchInput(e.target.value)
                }}
                value={searchInput}/>
            <ItemStatusFilter
                searchStatus = {searchStatus}
                setStatus = {setStatus}
                />
            <p>Active {activ}, Done {done}</p>
        </div>    
    )
}

export default SearchPanel;