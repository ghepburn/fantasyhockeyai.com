import React, {useContext} from 'react';
import withTools from "../../globalState/decoraters/withTools";
import DisplaySettingsContext from "../../globalState/displaySettings/DisplaySetttingsContext";

const FormSection = ({title, content, log}) => {

    // define context
    const displaySettingsContext = useContext(DisplaySettingsContext);
    const displaySettings = displaySettingsContext.getDisplaySettings();

    
    const formatFormItems = (itemArray) => {
        try{
            // organize into equal rows
            const rowData = organizeIntoRows(itemArray);

            // style as subContent
            const formData = decorateAsSubContent(rowData);

            return formData;

        } catch(e) {
            log(`Error in FormSection within formatFormItems: ${e.message}`);
        }

    }

    const organizeIntoRows = (itemArray) => {
        // place data into rows defined in settings

        // create result and row
        const result = [];
        let row = [];

        //iterate over array
        for (let i = 0; i < itemArray.length; i++) {
            // if row is full, append to result and create new row
            if (row.length === displaySettings.formRowLength) {
                result.push(row);
                row = [];
            }
            
            // tranform item
            const transformedItem = <div className="rowItem">{itemArray[i]}</div>

            //append item to row
            row.push(transformedItem);
        }

        // add blanks to last row if needed
        while (row.length < displaySettings.formRowLength) {
            const blank = <div className="rowItem"></div>;
            row.push(blank);
        }

        // add last row to result
        if (row.length) {
            result.push(row);
        }
        
        // result === array of arrays of predetermiend size
        return result;
    }


    const decorateAsSubContent = (rowData) => {
        // map array to be within subContent className
        const decoratedRowData = rowData.map(singleItem => {
            return(
                <div className="formSectionSubContent">
                    {singleItem}
                </div>
            );
        })
        return decoratedRowData;
    }

    // format large data amounts if needed
    const displayedFormItems = formatFormItems(content);

    return (  
        <div className="formSection">
            <div className="formSectionTitle">
                {title}
            </div>
            <div className="formSectionContent">
                {displayedFormItems}
            </div>
        </div>
    );
}
 
export default withTools(FormSection);