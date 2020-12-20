import React, {useState, useContext} from 'react';
import DisplaySettingsContext from "../../globalState/displaySettings/DisplaySetttingsContext";

const SelectionFormButton = ({handleClick, label, shortLabel, highlight}) => {
    
    // set context
    const displaySettingsContext = useContext(DisplaySettingsContext);
    const displaySettings = displaySettingsContext.getDisplaySettings();

    // define variables
    let [highlightButton, setHighlightButton] = useState(highlight);
    let highlightColor = displaySettings.buttonHighlightColor;

    const handleButtonClick = (event) => {
        console.log(highlightColor);
        setHighlightButton(!highlightButton);
        handleClick(event);
    }
    
    let backgroundColor = highlightButton ? highlightColor : ""; 

    return (  
        <button className="button categoryButton" name={label} onClick={handleButtonClick} style={{backgroundColor: backgroundColor}}>
            {shortLabel}
        </button>
    );
}
 
export default SelectionFormButton;