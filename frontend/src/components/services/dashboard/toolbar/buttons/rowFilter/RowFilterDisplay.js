import React from 'react';
import Copier from '../../../functionality/copy/Copier';
import withDashboardContext from "../../../state/withDashboardContext";
import InputValueFilterColumn from "./InputValueFilterColumn";

const RowFilterDisplay = ({rowFilter, setRowFilter}) => {
    
    const [updatedFilter, setUpdatedFilter] = React.useState(Copier.deepCopy(rowFilter));

    const updateFilter = (field) => {
        const filter = Copier.deepCopy(updatedFilter);
        filter[field] = !filter[field];
        setUpdatedFilter(filter);
    }

    const applyFilter = () => {
        setRowFilter(updatedFilter);
    }

    const filters = updatedFilter.inputs.map((field) => {
        return(
            <tr className="row-filter-display-row">
                <td>
                    {field}
                </td>
                <td>
                    <InputValueFilterColumn field={field} filter={updatedFilter} updateFilter={updatedFilter} />
                </td>
            </tr>
        );
    }) 
    
    return (  
        <table className="row-filter-display">
            {filters}
            <button onClick={applyFilter}>Apply</button>
        </table>
    );
}
 
export default withDashboardContext(RowFilterDisplay);