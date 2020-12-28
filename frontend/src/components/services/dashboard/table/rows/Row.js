import React from 'react';
import TableData from "./tableEntities/TableData";
import UpDownArrowTableEntity from "./tableEntities/UpDownArrowTableEntity";
import withDashboardContext from "../../../globalState/decoraters/withDashboardContext";
/**
 * Displays object data as a table row
 * 
 * @param {data} - JS object 
 */
const StandardRow = ({identifier, dataEntity, columnFilter, columns}) => {

    const keys = Object.keys(dataEntity);

    const tableData = columns.filter(col => 
            columnFilter[col] === true
        ).map((col) => {
        const value = dataEntity[col];
        return(
            <TableData identifier={col} value={value} />
        );
    })
    
    return (  
        <tr id={identifier} className={"row-" + identifier + " table-row"}>
            {tableData}
            <UpDownArrowTableEntity dataEntityIndex={identifier} />
        </tr>
    );
}
 
export default withDashboardContext(StandardRow);