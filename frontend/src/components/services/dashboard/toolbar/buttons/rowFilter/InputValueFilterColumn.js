import React from 'react';

const InputValueFilterColumn = ({field, filter, updateFilter}) => {

    const fieldInput = field + "Input";
    const [showValueFiler, setShowValueFilter] = React.useState(filter[fieldInput]);

    
    const valueFilter = showValueFiler ? <table>
        {filter[fieldInput].map(}
    </table> : "";
    

    return (  
        <td className="input-value-filter row-filter">
            <input type="checkbox" name={field} checked={updatedFilter[field]} onClick={()=>{updateFilter(field)}} />;
            {valueFilter}
        </td>
    );
}
 
export default InputValueFilterColumn;