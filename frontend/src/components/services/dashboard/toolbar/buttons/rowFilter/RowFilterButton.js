import React from 'react';
import RowFilterDisplay from "./RowFilterDisplay";

const RowFilterButton = () => {

    const [showFilters, setShowFilters] = React.useState(false);

    const filterDisplay = showFilters ? <RowFilterDisplay /> : "";

    return ( 
        <div className="column-filter-button">
            <button onClick={()=>{setShowFilters(!showFilters)}}>Filter</button>
            {filterDisplay}
        </div>
    );
}
 
export default RowFilterButton;