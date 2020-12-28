import React from 'react';
import withDashboardContext from "../../../globalState/decoraters/withDashboardContext";
import ColumnHeader from './tableEntities/ColumnHeader';

// import Sorter from "../../functionality/sort/sorter";


const Headers = ({columns, columnFilter}) => {

    const headers = columns.filter(colName => 
        columnFilter[colName] === true
    ).map((colName) => {
        return(
            <ColumnHeader name={colName} />
        );
    });
    
    return (  
        <tr className={"table-row table-column-headers"}>
            {headers}
        </tr>
    );
}
 
export default withDashboardContext(Headers);