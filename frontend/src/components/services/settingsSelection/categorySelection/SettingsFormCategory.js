import React, {updateState} from 'react';
import CategoryButton from "../utils/CategoryButton";

const SettingsFormCategory = ({shortLabel, label, onClick, show}) => {

    return (  
        <CategoryButton label={label} shortLabel={shortLabel} handleClick={onClick} highlight={show}/>
    );
}
 
export default SettingsFormCategory;