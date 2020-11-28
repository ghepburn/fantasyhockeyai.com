import React from 'react';
import PlayerSettings from "./players/PlayerSettings";
import GoalieSettings from "./goalies/GoalieSettings";

const CategorySelectionForm = () => {
    return (  
        <div className="form">
            <PlayerSettings />
            <GoalieSettings />
        </div>
    );
}
 
export default CategorySelectionForm;