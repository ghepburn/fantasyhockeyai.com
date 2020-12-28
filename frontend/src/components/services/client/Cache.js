export default class Cache {

    expiration;
    data = [];

    constructor(data) {
        this.data = data;
    }

    hasData = () => {
        // if (this.data.length > 0) {
        //     console.log(this.data.length);
        //     return true
        // } else {
        //     return false
        // }
        return false;
    }

    getData = (data) => {
        return this.data;
    }
    
    setData = (data) => {
        this.data = data
    }
}