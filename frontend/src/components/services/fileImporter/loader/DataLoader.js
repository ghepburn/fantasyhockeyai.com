import {axios} from "axios"

class DataLoader {

    static postEndpoint = "/api/nhl"

    static async load(transformedJsonData) {

        // serialize
        const payload = this.serializePayload = (transformedJsonData);
        
        // get headers
        const headers = this.getHeaders();

        // post
        const response = await this.postToBackend(payload, headers);
        
        return response
    }

    static serializePayload(data) {
        const jsonPayload = {athletes: data}
        const payload = JSON.stringify(jsonPayload);
        return payload;
    }

    static getHeaders() {
        
        const headers = {
            "Content-Type": "application/json"
        }
        return headers;
    }

    static async postToBackend(payload, headers) {
        try {
            console.log(payload);
            // const response = await axios.post(this.postEndpoint, payload);
            // return response;

        } catch(e) {
            console.log("Error posting to backend: " + e.message);
            throw new Error(e.message);
        }
    }
}

export default DataLoader;