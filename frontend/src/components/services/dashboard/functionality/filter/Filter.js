/**
 * transforms an array of strings into a JS object using values as keys and true/false as values
 */
export default class Filter {

    constructor(stringArray, checked=true) {  
        this.checked = checked;
        for (let i = 0; i <  stringArray.length; i++) {
            const field = stringArray[i]; 
            this[field] = checked;         
        }
    }

    addItem = (item) => {
        this[item] = this.checked;
    }
}