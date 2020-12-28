import React from 'react';
import withDashboardContext from "../../../../globalState/decoraters/withDashboardContext";
import Sorter from "../../../functionality/sort/Sorter";
import RowFilterButton from "../../../functionality/filter/rowFilter/RowFilterButton";

const ColumnHeader = ({name, data, setData}) => {

    const [sorted, setSorted] = React.useState(false);

    const sortData = (field) => {
        let reverse = sorted;
        const sortedData = Sorter.standardSort(data, field, reverse);
        setData(sortedData);
        setSorted(!sorted);
    }   

    return (  
        <th className="table-column-header table-column sticky" name={name} onClick={() => {sortData(name)}}>
            {name}
        </th>
    );
}
 
export default withDashboardContext(ColumnHeader);