import axios from "axios"

class DataLoader {

    static postEndpoint = "/api/nhl"

    static async load(transformedJsonData, year) {

        // serialize
        // const serializedData = this.serializePayload(transformedJsonData);

        // format
        const payload = this.formatPayload(transformedJsonData, year);

        console.log(payload);
        
        // get headers
        const headers = this.getHeaders();

        // post
        const response = await this.postToBackend(payload, headers);
        
        return response
    }

    static serializePayload(data) {
        const payload = JSON.stringify(data);
        return payload;
    }

    static getHeaders() {
        
        const headers = {
            "Content-Type": "application/json"
        }
        return headers;
    }

    static formatPayload(data, year) {
        const payload = {
            data: data,
            year: year
        }
        return payload;
    }

    static async postToBackend(payload, headers) {
        try {
            const config = {headers: headers};
            const response = await axios.post(this.postEndpoint, payload, config);
            console.log("response is:")
            console.log(response);
            return response;

        } catch(e) {
            console.log("Error posting to backend: " + e.message);
            throw new Error(e.message);
        }
    }
}

export default DataLoader;