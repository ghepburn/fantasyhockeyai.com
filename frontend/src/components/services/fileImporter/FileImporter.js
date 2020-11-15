import React, {useRef, useState} from 'react';
import {CSVReader} from "react-papaparse";
import DataTransformer from "./transformer/DataTransformer";
import DataValidator from "./validator/DataValidator";
import DataLoader from "./loader/DataLoader";

const FileImporter = () => {

    const [year, setYear] = useState("");
    
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const fileInputRef = useRef();

    const handleLoadedData = (csvData) => {

        if (!yearIsValid(year)) {
            setSuccessMessage("");
            setError("Please input year as 'YYYY-YYYY'.");
            return null
        }

        // transform
        const jsonData = DataTransformer.transform(csvData);

        // validate
        const isValid = DataValidator.isValid(jsonData);

        // load
        if (isValid) {
            DataLoader.load(jsonData, year);

            setSuccessMessage("Import Complete.");
            setError("");
        } else {
            console.log("File data is not valid.");
        }
    }

    const handleError = (e) => {
        console.log("Data import Error.");
        console.log(e);
    }

    const handleYearChange = (e) => {
        setYear(e.target.value);
        console.log(e.target.value)
    }   

    const yearIsValid = (year) => {
        if (year.length === 9) {
            return true
        }
        return false;
    }

    const inputErrorMessage = <div className="inputErrorMessage">{error}</div>;
    const inputSuccessMessage = <div className="inputSuccessMessage">{successMessage}</div>;

    return (  
        <div className="fileImporter form" id="fileImporter">
            <p>Import CSV</p>
            {inputErrorMessage}
            {inputSuccessMessage}
            <input className="inputYear" type="text" placeholder="Enter Year: 2019-2020" onChange={handleYearChange}/>
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