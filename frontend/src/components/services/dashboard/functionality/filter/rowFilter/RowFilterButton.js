import React from 'react';
import withDashboardContext from "../../../../globalState/decoraters/withDashboardContext";

const RowFilterButton = ({field}) => {
    return (  
        <div className="row-filter-button">
            <button>^</button>
        </div>
    );
}
 
export default withDashboardContext(RowFilterButton);