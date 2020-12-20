import React, {useState} from 'react';
import TableHeader from './TableHeader';
import Sorter from "../../functionality/sort/sorter";

/**
 * Displays string array as a table row of headers
 * 
 * @param {values} - string array 
 */
const HeaderRow = ({tableState}) => {

    /**
     * get, sort, and apply data
     * 
     * @param {colName} string of column name 
     */
    const sortData = (colName) => {
        const data = tableState.copyData();
        
        Sorter.setSortBy(colName);
        const sortedData = Sorter.sort(data);
        
        tableState.setData(sortedData);
    }

    const headers = tableState.columns.map((col) => {
        return(
            <TableHeader value={col} sortData={sortData} />
        );
    })
    
    return (  
        <tr className={"row-headers"}>
            {headers}
        </tr>
    );
}
 
export default HeaderRow;