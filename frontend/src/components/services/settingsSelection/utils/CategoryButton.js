import React, {useState} from 'react';

const CategoryButton = ({handleClick, label, highlight}) => {
    
    let [highlightButton, setHighlightButton] = useState(highlight);
    let highlightColor = "lightgreen";

    const handleButtonClick = (event) => {
        setHighlightButton(!highlightButton);
        handleClick(event);
    }

    let backgroundColor = highlightButton ? highlightColor : ""; 

    return (  
        <button className="categoryButton button formButton" name={label} onClick={handleButtonClick} style={{backgroundColor: backgroundColor}}>
            {label}
        </button>
    );
}
 
export default CategoryButton;