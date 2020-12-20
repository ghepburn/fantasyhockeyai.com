import React from 'react';

const CheckBox = ({name, checked, onChange}) => {

    console.log(checked);

    const input = checked ? <input type="checkbox" name={name} onChange={onChange} /> : <input type="checkbox" name={name} onChange={onChange} checked /> ; 

    return (  
        <div>
            {input}
        </div>
    );
}
 
export default CheckBox;