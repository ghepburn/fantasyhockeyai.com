import React from 'react';
import withDashboardContext from "../../globalState/decoraters/withDashboardContext";
import Row from "./rows/Row";
import Headers from "./rows/Headers";

const StandardTable = ({data}) => {
    
    let count = 0;
    const rows = data.map((dataEntity) => {
        return(
            <Row identifier={count++} dataEntity={dataEntity} />
        );
    })

    return (  
        <table className="dashboard-table standard-table">
            <thead>
                <Headers />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}
 
export default withDashboardContext(StandardTable);