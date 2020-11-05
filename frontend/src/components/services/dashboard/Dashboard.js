import React, {useContext} from 'react';
import FantasySettingsContext from "../globalState/fantasySettings/FantasySettingsContext";

const Dashboard = () => {

    const fantasySettings = useContext(FantasySettingsContext);
    console.log(fantasySettings.getFantasySettings());

    return (  
        <div className="dashboard">
            DASHBOARD
        </div>
    );
}
 
export default Dashboard;