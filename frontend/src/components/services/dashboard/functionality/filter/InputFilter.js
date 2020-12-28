import Filter from "./Filter";

export default class InputFilter {

    inputs = [];

    constructor(objArray, checked=true) {  
        
        //use first object to use column names to set fields & fieldInputs
        const fields = Object.keys(objArray[0]);
        this.setFields(fields, checked);

        //parse all rows to set individual values into filters
        for (let i = 0; i < objArray.length; i++) {
            this.addObjValues(objArray[i]);
        }

    }

    setFields = (fields, checked) => {
        for (let i = 0; i < fields.length; i++) {
            this[fields[i]] = checked;
            this[fields[i] + "Input"] = new Filter({}, true);
            this.inputs.push(fields[i]);
        }
    }

    addObjValues = (dataObj) => {
        const keys = Object.keys(dataObj);
        for (let key of keys) {
            const keyInput = key + "Input";
            const objValue = dataObj[key];
            
            //if we not already added this value
            if (!this[keyInput][objValue]) {
                this[keyInput].addItem(objValue);
            }
        }
    }

    showAll = () => {
        for (let i = 0; i < this.inputs.length; i++) {
            const key = this.input[i];
            
            //turn input flag on 
            this[key] = true;

            //turn input flags on
            const keyInputs = this[key + "Input"];
            const keyInputKeys = Object.keys(keyInputs);
            for (key of keyInputKeys) {
                keyInputs[key] = true;
            } 
        }
    }

    showNone = () => {
        for (let i = 0; i < this.inputs.length; i++) {
            const key = this.input[i];
            
            //turn input flag on 
            this[key] = false;

            //turn input flags on
            const keyInputs = this[key + "Input"];
            const keyInputKeys = Object.keys(keyInputKeys);
            for (key of keyInputKeys) {
                keyInputs[key] = false;
            } 
        }
    }
}