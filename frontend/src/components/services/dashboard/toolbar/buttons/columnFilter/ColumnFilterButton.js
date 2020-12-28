import React from 'react';
import ColumnFilterDisplay from "./ColumnFilterDisplay";

const ColumnFilterButton = () => {

    const [showFilters, setShowFilters] = React.useState(false);

    const filterDisplay = showFilters ? <ColumnFilterDisplay /> : "";

    return ( 
        <div className="column-filter-button">
            <button onClick={()=>{setShowFilters(!showFilters)}}>Columns</button>
            {filterDisplay}
        </div>
    );
}
 
export default ColumnFilterButton;