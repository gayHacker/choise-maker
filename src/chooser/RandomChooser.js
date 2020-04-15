import OptionsPool from "../model/OptionsPool.js";
import Option from "../model/Option.js";
import LuckyDrawItem from "../model/LuckyDrawItem.js"
import Search from "../util/Search.js";

class RandomChooser {

    /**
     * 
     * @param {OptionsPool} pool 
     */
    constructor(pool) {
        this.optionPool = pool;
    }

    randomOption() {
        let quorumPointer = 0.0;
        let luckeyDrawItems = [];

        this._getOptionList().forEach(o => {
            let itemPosition = quorumPointer
            let itemPositionBound = quorumPointer + o.quorum

            luckeyDrawItems.push(new LuckyDrawItem(o, itemPosition, itemPositionBound));

            quorumPointer = itemPositionBound;
        });

        let chosenPoint = this._random(quorumPointer);
        let chosenOption = this._findLuckyItem(luckeyDrawItems, chosenPoint);

        return chosenOption;
    }

    _findLuckyItem(luckeyDrawItems, chosenPoint) {
        /**
         * 
         * @param {LuckyDrawItem} luckyDrawItem 
         * @param {number} chosenPoint
         */
        let comparator = (luckyDrawItem, chosenPoint) => {
            if (luckyDrawItem.position > chosenPoint) return -1
            else if (luckyDrawItem.bound <= chosenPoint) return 1
            else return 0
        }

        let search = new Search(luckeyDrawItems, comparator, false);
        let itemIndex = search.binarySearch(chosenPoint);

        return luckeyDrawItems[itemIndex].reward;
    }

    /**
     * @returns {Option[]}
     */
    _getOptionList() {
        return this.optionPool.optionList;
    }

    _random(quorumSum) {
        return Math.random() * quorumSum;
    }
}

export default RandomChooser;