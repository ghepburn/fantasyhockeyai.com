import React from 'react';
import PlayerWeights from "./players/PlayerWeights";
import GoalieWeights from "./goalies/GoalieWeights";

const WeightForm = () => {
    return (  
        <div className="form">
            <PlayerWeights />
            <GoalieWeights />
        </div>
    );
}
 
export default WeightForm;