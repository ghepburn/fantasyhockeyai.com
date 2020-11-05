import React from 'react';
import PlayerSettings from "./players/PlayerSettings";
import GoalieSettings from "./goalies/GoalieSettings";

const SettingsForm = () => {
    return (  
        <div className="form">
            <PlayerSettings />
            <GoalieSettings />
        </div>
    );
}
 
export default SettingsForm;