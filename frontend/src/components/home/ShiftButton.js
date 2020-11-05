import React from 'react';

const ShiftButton = ({label, onClick}) => {
    return (  
        <button className="shiftButton" onClick={onClick}>
            {label}
        </button>
    );
}
 
export default ShiftButton;