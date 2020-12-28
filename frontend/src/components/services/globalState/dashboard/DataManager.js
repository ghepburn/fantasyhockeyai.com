

export default class DataManager {
    static columnOrder = ["id", "year", "name", "team", "age", "pos", "gp", "gaa", "svPercent", "w", "l", "so", "time", "g", "a", "p", "pim", "plusMin", "toi", "toiEs", "toiPp", "toiSh", "esg", "ppg", "shg", "gwg", "otg", "esa", "ppa", "sha", "gwa", "ota", "esp", "ppp", "shp", "gwp", "otp", "pppPercent", "gPer60", "aPer60", "pPer60", "esgPer60", "esaPer60", "espPer60", "ppgPer60", "ppaPer60", "pppPer60", "gPerGp", "aPerGp", "pPerGp", "shots", "shotPercent", "hits", "bs", "fow", "fol", "foPercent"]


    static orderColumns = (columns) => {
        let result = [];
        let updatedColumns = columns;
        for (let i = 0; i < this.columnOrder.length; i ++) {
            const colInQuestion = this.columnOrder[i];
            if (columns.includes(colInQuestion)) {
                result.push(colInQuestion)      //add to result
                let index = columns.indexOf(colInQuestion);
                updatedColumns.splice(index, 1);
            } 
        }
        // merge remaining columns
        result = result.concat(updatedColumns);
        return result;
    }
}