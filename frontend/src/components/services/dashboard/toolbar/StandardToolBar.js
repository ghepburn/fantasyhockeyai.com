import React from 'react';

import ColumnFilterButton from "./buttons/columnFilter/ColumnFilterButton";
// import RowFilterButton from "./buttons/rowFilter/RowFilterButton";

const StandardToolBar = ({tableState}) => {

    return (  
        <div className="dashboard-toolbar">
            <div className="toolbar-row">
                TOOLBAR
            </div>
            <div className="toolbar-row">
                <ColumnFilterButton  />
                {/* <RowFilterButton /> */}
            </div>
        </div>
    );
}
 
export default StandardToolBar;