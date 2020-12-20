import React, {useState} from 'react';

import FilterableObject from "../utils/Filter";
import FilterDisplay from "./columnFilterDisplay";

const FilterColumnsButton = ({tableState}) => {

    const cols = Object.keys(data[0]);               // use columns as filter options
    const filterObj = new FilterableObject(cols);      // merges strings w true/false in object

    const [filters, setFilters] = useState(filterObj);
    const [showFilter, setShowFilter] = useState(false); 

    const setFilters = (filterObj) => {
        setColumnFilters(filterObj);
    }

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    }

    const filterDisplay = showFilter ? <FilterDisplay filters={filters} setFilters={setFilters} /> : "";

    return (  
        <div className="toolbar-filter">
            <button className="toolbar-button" id="toolbar-filter-button" onClick={toggleFilter}>Filter</button>
            {filterDisplay}
        </div>
    );
}
 
export default FilterColumnsButton;