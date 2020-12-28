export default class Copier {
    static deepCopy(item) {
        return JSON.parse(JSON.stringify(item));
    }
}