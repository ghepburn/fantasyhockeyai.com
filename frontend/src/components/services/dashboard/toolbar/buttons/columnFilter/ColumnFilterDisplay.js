import React from 'react';
import Copier from '../../../functionality/copy/Copier';
import withDashboardContext from "../../../../globalState/decoraters/withDashboardContext";

const ColumnFilterDisplay = ({columnFilter, setColumnFilter}) => {
    
    const [updatedFilter, setUpdatedFilter] = React.useState(Copier.deepCopy(columnFilter));

    const updateFilter = (field) => {
        const filter = Copier.deepCopy(updatedFilter);
        filter[field] = !filter[field];
        setUpdatedFilter(filter);
    }

    const applyFilter = () => {
        setColumnFilter(updatedFilter);
    }

    const filters = Object.keys(updatedFilter).map((key) => {
        return(
            <tr className="column-filter-display-row">
                <td>
                    {key}
                </td>
                <td>
                    <input type="checkbox" name={key} checked={updatedFilter[key]} onClick={()=>{updateFilter(key)}} />
                </td>
            </tr>
        );
    }) 
    
    return (  
        <table className="column-filter-display">
            {filters}
            <button onClick={applyFilter}>Apply</button>
        </table>
    );
}
 
export default withDashboardContext(ColumnFilterDisplay);