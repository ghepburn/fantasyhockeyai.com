import React from 'react';

import StandardTable from "./table/StandardTable";
import StandardToolbar from "./toolbar/StandardToolBar";

const DashboardView = () => {

    return (  
        <div className="dashboard-view">
            <div className="dashboard-view-title">
                DASHBOARD
            </div>
            <div className="dashboard-view-content">
                <StandardToolbar />
                <StandardTable />
            </div>

        </div>
    );
}

export default DashboardView;