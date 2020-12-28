import React from 'react';
import withDashboardContext from "../../../../globalState/decoraters/withDashboardContext";
import Swapper from "../../../functionality/swap/Swapper";

const UpDownArrowTableEntity = ({dataEntityIndex, data, setData}) => {
    
    const move = (direction) => {
        const updatedData = Swapper.moveWithIndex(data, dataEntityIndex, direction);
        setData(updatedData);
    }
    
    return (  
        <td className="updownarrow-table-entity">
            <div className="movement-arrow" onClick={() => {move("up")}}>Up</div>
            <div className="movement-arrow" onClick={() => {move("down")}}>Down</div>
        </td>
    );
}
 
export default withDashboardContext(UpDownArrowTableEntity);