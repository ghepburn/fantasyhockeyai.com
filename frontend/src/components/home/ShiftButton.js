import React from 'react';

const ShiftButton = ({label, onClick}) => {
    return (  
        <button className="shiftButton button" onClick={onClick}>
            {label}
        </button>
    );
}
 
export default ShiftButton;