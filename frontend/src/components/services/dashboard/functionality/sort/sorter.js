/**
 * sorts an array of data
 * 
 * includes functionality to:
 * - reverse order on double click
 */
export default class Sorter {

    static sortField;
    static lastSortByField;

    static setSortField = (field) => {
        this.lastSortByField = this.sortField;
        this.sortField = field;
    }

    static standardSort = (data, field, reverse=false) => {
        this.setSortField(field);
        let sortedData;
        if (!reverse) {
            sortedData = data.sort(this.runStandardSort);
        } else {
            sortedData = data.sort(this.runReverseStandardSort);
        }
        return sortedData;
    }

    static runStandardSort = (a, b) => {

        const sortField = this.sortField;

        if (a[sortField] < b[sortField]) {
            return -1;
        } 
        if (a[sortField] > b[sortField]) {
            return 1;
        }
        return 0;
    }

    static runReverseStandardSort = (a, b) => {

        const sortField = this.sortField;
        if (a[sortField] > b[sortField]) {
            return -1;
        } 
        if (a[sortField] < b[sortField]) {
            return 1;
        }
        return 0;
    }
}