/**
 * sorts an array of data
 * 
 * includes functionality to:
 * - reverse order on double click
 */
export default class Sorter {

    static sortBy = "pk";
    static lastSortBy = "";
    static reverse = false;
    static sortMethod = "standardSort";

    static setSortBy = (value) => {
        this.lastSortBy = this.sortBy;
        this.sortBy = value;
    }

    static sort = (data) => {
        
        // if same col clicked twice then toggle reverse flag
        if (this.lastSortBy === this.sortBy) {
            this.reverse = !this.reverse;
        }

        // if reverse flag on return reverse of input else sort
        if (this.reverse) {
            return data.reverse();
        } else {
            const sortFuncName = this.sortMethod;
            const sortFunc = Sorter[sortFuncName];
            return data.sort(sortFunc);
        }
    }

    static standardSort = (a, b) => {

        const sortField = this.sortBy;
        if (a[sortField] < b[sortField]) {
            return -1;
        } 
        if (a[sortField] > b[sortField]) {
            return 1;
        }
        return 0;
    }
}