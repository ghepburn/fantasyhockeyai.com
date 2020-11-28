import React, {useState} from 'react';

const SelectionFormInput = ({handleChange, label, shortLabel, defaultValue}) => {
    
    // defined so can easily change to short in future for all inputs
    const displayedLabel = label;

    const onChange = (event) => {
        handleChange(event);
    }

    return (  
        <div className="formInput">
            <label className="formInputLabel">{displayedLabel}:</label>
            <input className="formInputInput" type="number" min="0.05" max="99" step="0.05" onChange={onChange} defaultValue={defaultValue} />
        </div>
    );
}
 
export default SelectionFormInput;