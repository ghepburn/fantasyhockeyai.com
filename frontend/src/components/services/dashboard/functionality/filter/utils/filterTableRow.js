import React from 'react';

const FilterTableRow = ({name, onChange, checked}) => {

    const onClick = (event) => {
        // console.log(checked);
        onChange(event);
    }

    return (  
        <tr className="filter-table-row">
            <td>
                {name}
            </td>
            <td>
                <input id={"column-filter-checkbox-"+name} type="checkbox" name={name} onChange={onClick} checked={checked} />
            </td>
        </tr>
    );
}
 
export default FilterTableRow;