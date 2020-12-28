import React from 'react';

const TableData = ({identifier, value}) => {
    
    const colClass = "table-data table-column col-" + identifier;

    return (  
        <td className={colClass}>
            {value}
        </td>
    );
}
 
export default TableData;