import React from 'react';

const TableData = ({identifier, value}) => {
    
    const colClass = identifier + " table-data";

    return (  
        <td className={colClass}>
            {value}
        </td>
    );
}
 
export default TableData;