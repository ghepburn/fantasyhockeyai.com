import React, {useState} from 'react';

const WeightInput = ({handleChange, label, shortLabel, weight}) => {
    
    let [highlightButton, setHighlightButton] = useState(false);
    let highlightColor = "lightgreen";

    const onChange = (event) => {
        console.log("Changing");
        handleChange(event);
    }

    return (  
        <div className="formInput">
            <label className="formInputLabel">{label}:</label>
            <input className="formInputInput" type="number" min="0.05" max="99" step="0.05" name={label} onChange={onChange} defaultValue={weight} />
        </div>
    );
}
 
export default WeightInput;