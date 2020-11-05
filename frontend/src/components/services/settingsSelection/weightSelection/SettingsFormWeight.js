import React, {updateState} from 'react';
import WeightInput from "../utils/WeightInput";

const SettingsFormWeight = ({shortLabel, label, weight, handleChange}) => {

    return (  
        <div className="formWeight" >
            <WeightInput label={label} shortLabel={shortLabel} weight={weight} handleChange={handleChange}/>
        </div>
    );
}
 
export default SettingsFormWeight;