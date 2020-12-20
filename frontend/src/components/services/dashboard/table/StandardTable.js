import React, {useContext} from 'react';

import Row from "./utils/Row";
import HeaderRow from "./utils/HeaderRow";

import TableState from "./state/tableState"

/**
 * Displays an array of objects as a table
 * 
 * @param {data} - array of objects 
 */
const StandardTable = ({tableState}) => {

    const headers = <HeaderRow tableState={tableState} />
    const rows = tableState.data.map((obj) => {
        return(
            <Row identifier={obj.pk} data={obj} />
        );
    })

    return (  
        <table className="dashboard-table standard-table">
            {headers}
            {rows}
        </table>
    );
}
 
export default StandardTable;