import React, {useRef} from 'react';
import {CSVReader} from "react-papaparse";
import DataTransformer from "./transformer/DataTransformer";
import DataValidator from "./validator/DataValidator";
import DataLoader from "./loader/DataLoader";

const FileImporter = () => {

    const fileInputRef = useRef();

    const handleLoadedData = (csvData) => {

        console.log(csvData);

        // transform
        const jsonData = DataTransformer.transform(csvData);

        // validate
        const isValid = DataValidator.isValid(jsonData);

        // load
        if (isValid) {
            DataLoader.load(jsonData);
        } else {
            console.log("File data is not valid.");
        }
    }

    const handleError = (e) => {
        console.log("Data import Error.");
        console.log(e);
    }

    return (  
        <div className="fileImporter form" id="fileImporter">
            <p>Import CSV</p>
            <CSVReader 
                onFileLoad={handleLoadedData}
                ref={fileInputRef}
                onError={handleError}
            >
                <button className="importButton">Click To Import</button>
            </CSVReader>
        </div>
    );
}
 
export default FileImporter;