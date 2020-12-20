import React from 'react';

const TableHeader = ({value, sortData, setSortBy}) => {

    const handleClick = (event) => {
        const sortByCol = event.target.value;
        // setSortBy(sortByCol);
        sortData(value);
    }
    
    return (  
        <th className={"table-header col-" + value} onClick={handleClick}>
            {value}
        </th>
    );
}
 
export default TableHeader;