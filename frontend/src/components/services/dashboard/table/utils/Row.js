import React from 'react';
import TableData from "./TableData";

/**
 * Displays object data as a table row
 * 
 * @param {data} - JS object 
 */
const StandardRow = ({identifier, data}) => {

    const keys = Object.keys(data);

    const tableData = keys.map((key) => {
        const value = data[key];
        return(
            <TableData identifier={key} value={value} />
        );
    })
    
    return (  
        <tr id={identifier} className={"row-" + identifier + " standard-row table-row"}>
            {tableData}
        </tr>
    );
}
 
export default StandardRow;