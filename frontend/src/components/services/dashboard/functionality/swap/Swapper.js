import Copier from "../copy/Copier";

export default class Swapper {

    static moveWithIndex(data, itemIndex, direction) {
        const updatedData = Copier.deepCopy(data);
        let otherIndex;
        if (direction === "up") {
            if (itemIndex === 0) {
                return updatedData;
            }
            otherIndex = itemIndex - 1;
        } else {
            if(itemIndex === (data.length-1)) {
                return updatedData;
            }
            otherIndex = itemIndex + 1;
        }

        //do the swap
        const temp = updatedData[otherIndex];
        updatedData[otherIndex] = updatedData[itemIndex];
        updatedData[itemIndex] = temp;

        return updatedData;
    }
}