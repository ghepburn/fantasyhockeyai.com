export default class DataValidator {

    static colPlayerWhiteList = ["Rk", "Name", "Team", "Age", "Pos", "GP", "G", "A", "P", "PIM", "+/-", "TOI", "ES", "PP", "SH", "ESG", "PPG", "SHG",	"GWG", "OTG", "ESA", "PPA",	"SHA", "GWA", "OTA", "ESP",	"PPP", "SHP", "GWP", "OTP",	"PPP%",	"G/60",	"A/60",	"P/60",	"ESG/60", "ESA/60",	"ESP/60", "PPG/60",	"PPA/60", "PPP/60",	"G/GP",	"A/GP",	"P/GP",	"SHOTS", "SH%",	"HITS",	"BS", "FOW", "FOL",	"FO%"];
    static colGoalieWhiteList = ["Rk", "Name", "Team", "Age", "GP", "GAA", "SV%", "W", "L", "SO", "TIME", "G", "A", "P", "PIM"];
    static blackList = ["select", "from", "table", "insert", "delete"]

    static isValid(jsonDataArray) {

        // validate upload size
        const validSize = this.validateSize(jsonDataArray);

        // check each row of data
        let validAttributes;
        let validValues;
        for (const dataRow of jsonDataArray) {

            // validate object attributes
            validAttributes = this.validateAttributes(dataRow);

            // validate object attribute value
            validValues = this.validateAttributeValues(dataRow);
        }

        

        if (validAttributes && validValues && validSize) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param {Object} data
     * @returns boolean 
     * 
     * checks if data object attributes are legit
     */
    static validateAttributes(data) {
        try {
            const cols = Object.keys(data);

            // check each column value
            for (const col of cols) {
                if (!this.colPlayerWhiteList.includes(col) && !this.colGoalieWhiteList.includes(col)) {
                    console.log("Col not in whitelist: " + col);
                    return false;
                }
            }

            return true;

        } catch(e) {
            console.log("Validation failed checking column values: " + e.message);
            throw new Error(e.message);
        }
    }

    /**
     * 
     * @param {Object} data
     * @returns boolean
     * 
     * checks if object values are legit 
     */
    static validateAttributeValues(data) {
        try {

            const values = Object.values(data);

            // check each array of values
            for (const value of values) {
                // check each item in the array
                for (const item of value) {
                    
                    if (item.length > 50) {   //check character length
                        console.log("Data values exceed character limit.")
                        return false;
                    }

                    if (item.length === 0) {   //check against blank values
                        console.log("Data value is blank.")
                        return false;
                    }
                    
                    if (this.blackList.includes(item.toLowerCase())) {   //check against word blacklist
                        console.log("Invalid data value provided.")
                        return false;
                    }
                }
                return true;
            }

        } catch(e) {
            console.log("Validation failed checking data values: " + e.message);
            throw new Error(e.message);
        }

    }

    static validateSize(data) {
        
        try{
            // define data variables
            const colsLength = Object.keys(data[0]).length;
            const rowsLength = data.length;

            // check against defined limits
            const validSize = true;

            if (colsLength > 100) {
                validSize = false;
            }
            if (rowsLength > 500) {
                validSize = false;
            }

            return validSize;
        } catch(e) {
            console.log("Validation failed checking size: " + e.message);
            throw new Error(e.message);
        }
        
        
    }
}