import React, {updateState} from 'react';
import SelectionFormInput from "../../utils/SelectionFormInput";

const WeightInput = ({shortLabel, label, weight, handleChange}) => {

    return (  
        <div className="weightInput" >
            <SelectionFormInput label={label} shortLabel={shortLabel} defaultValue={weight} handleChange={handleChange}/>
        </div>
    );
}
 
export default WeightInput;