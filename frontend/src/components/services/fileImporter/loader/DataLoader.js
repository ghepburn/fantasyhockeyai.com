class DataLoader {
    static load(transformedJsonData) {
        console.log("Loader");

        const jsonPayload = {players: JSON.stringify(transformedJsonData)}
        console.log(jsonPayload);
        
    }
}

export default DataLoader;