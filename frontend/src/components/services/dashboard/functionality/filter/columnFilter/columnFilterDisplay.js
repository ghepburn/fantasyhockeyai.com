import React, {useState} from 'react';
import FilterTableRow from "../utils/filterTableRow";

const FilterDisplay = ({filters, setFilters}) => {

    const [displayFilters, setDisplayFilters] = useState(JSON.parse(JSON.stringify(filters)));

    const applyFilters = () => {
        setFilters(displayFilters); //persists 
    }

    const updateFilter = async (event) => {
        const key = event.target.name;
        
        let updatedFilters = JSON.parse(JSON.stringify(displayFilters));

        updatedFilters[key] = !updatedFilters[key];

        setDisplayFilters(updatedFilters);
    }

    const keys = Object.keys(displayFilters);
    const filterDisplay = keys.map((key) => {
        return(
            <table>
                <FilterTableRow name={key} onChange={updateFilter} checked={displayFilters[key]} />
            </table>
        );
    })

    return (  
        <div className="filter-display">
            <table className="filter-table">
                {filterDisplay}
            </table>
            <button onClick={applyFilters}>Apply</button>
        </div>
    );
}
 
export default FilterDisplay;