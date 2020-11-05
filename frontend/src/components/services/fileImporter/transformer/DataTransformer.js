import Papa from "papaparse";

class DataTransformer {

    static headersToIgnore = [
        "",
        "Rk",
        "Overall"
    ]

    static transform(arrayData) {
        console.log("transform")
        try{

            console.log(arrayData);

            // separate headers and content
            const headerRow = this.getHeaderRow(arrayData);
            const headers = arrayData[headerRow].data;
            const contentData = this.getContentData(arrayData);

            // map contentData to json data
            const jsonData = this.mapData(headers, contentData);

            return jsonData;

        } catch(e) {
            console.log("Error transforming data: " + e.message);
        }
    }

    static getHeaderRow(data) {
        
        const rowOneItemOne = data[0].data[0]
        const rowOneItemTwo = data[0].data[1]

        if (rowOneItemOne.length === 0 && rowOneItemTwo.length === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    static getContentData(data) {
        const headerRow = this.getHeaderRow(data);
        const rowsToRemove = headerRow + 1;
        data.splice(0, rowsToRemove);
        return data;
    }

    static mapData(headers, content) {

        const jsonData = content.map((row)=>{
            
            // output object
            const jsonData = {};

            // remove unwanted columns
            for (let i = 0; i < headers.length; i++) {
                
                if (!this.headersToIgnore.includes(headers[i])) {
                    jsonData[headers[i]] = row.data[i];
                }   
            }

            return jsonData;
        });

        return jsonData;
    }

}

export default DataTransformer;