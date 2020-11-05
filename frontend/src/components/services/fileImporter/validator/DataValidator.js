class DataValidator {

    static isValid(jsonDataArray) {
        console.log("Validator");
        console.log(jsonDataArray);

        // validate object attributes
        const validAttributes = this.validateAttributes(jsonDataArray);

        // validate object attribute value
        const validValues = this.validateAttributValues(jsonDataArray);

        // validate upload size
        const validSize = this.validateSize(jsonDataArray);

        if (validAttributes && validValues && validSize) {
            return true;
        } else {
            return false;
        }
    }

    static validateAttributes(data) {
        
    }

    static validateAttributeValues(data) {

    }

    static validateSize(data) {
        const cols = Object.keys(data);
        colsLength = cols.length;
        const rowsLength = data[cols[0]].length;

        const validSize = true;
        if (colsLength > 100) {
            validSize = false;
        }
        if (rowsLength > 500) {
            validSize = false;
        }

        return valideSize;
        
    }
        

            for (let jsonData of jsonDataArray) {
                // validate keys
                const keys = Object.keys(jsonData);
                if (keys.length === 0) {
                    return false;
                }
                for (let key of keys) {
                    if (key.length === 0) {
                        return false;
                    }
                }

                // validate values
                const values = Object.values(jsonData);
                if (values.length === 0) {
                    return false;
                }
                for (let value of values) {
                    if (value === undefined) {
                        return false;
                    }
                }
            }

            return true;


        } catch(e) {
            console.log("Validator error. : " + e);
            return false;
        }
    }
}

export default DataValidator;