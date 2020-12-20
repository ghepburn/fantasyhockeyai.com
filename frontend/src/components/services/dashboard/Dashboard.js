import React, {useState} from 'react';

import StandardTable from "./table/StandardTable";
import StandardToolbar from "./toolbar/StandardToolBar";

import TableState from "./state/tableState";

const DashBoardData = React.createContext();

const Dashboard = () => {

    const [data, setData] = useState([{pk: 10, name:"Greg", age:26}, {pk: 2, name:"Jim", age:38}]);

    const tableState = new TableState(data, setData);

    // define tools
    const toolbar = <StandardToolbar tableState={tableState} />;
    const table = <StandardTable tableState={tableState} />;

    return (  
        <div className="dashboard">
            <div className="dashboard-title">
                DASHBOARD
            </div>
            <div className="dashboard-content">
                {toolbar}
                {table}
            </div>

        </div>
    );
}
 
export default Dashboard;