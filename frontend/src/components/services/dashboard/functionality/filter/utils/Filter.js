/**
 * transforms an array of strings into a JS object using values as keys and true/false as values
 */
export default class FilterableObject {

    constructor(stringArray) {  
        for (let i = 0; i <  stringArray.length; i++) {
            const field = stringArray[i]; 
            this[field] = true;         
        }
    }
}