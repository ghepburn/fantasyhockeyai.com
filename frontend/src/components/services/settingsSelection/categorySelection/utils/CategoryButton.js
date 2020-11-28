import React, {updateState} from 'react';
import SelectionFormButton from "../../utils/SelectionFormButton";

const CategoryButton = ({shortLabel, label, onClick, show}) => {

    return (  
        <SelectionFormButton label={label} shortLabel={shortLabel} handleClick={onClick} highlight={show}/>
    );
}
 
export default CategoryButton;