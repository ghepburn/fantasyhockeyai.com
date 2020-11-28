import React from 'react';
import WeightSelectionForm from "./WeightSelectionForm";

const WeightSlection = () => {
    return (  
        <div className="settingsSelectionSection">
            <div className="settingsSelectionSectionTitle">
                Select Your Weights
            </div>
            <WeightSelectionForm />
        </div>
    );
}
 
export default WeightSlection;