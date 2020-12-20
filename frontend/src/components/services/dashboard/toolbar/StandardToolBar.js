import React from 'react';

import ColumnFilterButton from "../functionality/filter/columnFilter/columnFilterButton";

const StandardToolBar = ({tableState}) => {

    return (  
        <div className="dashboard-toolbar">
            <div className="toolbar-row">
                TOOLBAR
            </div>
            <div className="toolbar-row">
                <ColumnFilterButton tableState={tableState} />
            </div>
        </div>
    );
}
 
export default StandardToolBar;