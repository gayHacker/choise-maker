import Option from "./Option.js";

class OptionPool {
    constructor() {
        this.options = [];
    }

    get size() {
        return this.options.length;
    }

    /**
     * get a copy of options in pool
     * 
     * @returns {Option[]}
     */
    get optionList() {
        let list = [];

        this.options.forEach(o => list.push(o.copy));

        return list;
    }

    /**
     * 
     * @param {Option} option 
     */
    addOption(option) {
        if (!(option instanceof Option)) {
            throw new Error("Invalid param \"option\"");
        }

        this.options.push(option);
    }

    getByIndex(index) {
        if (index >= this.options.length || index < 0) {
            throw new Error("invalid index: " + index);
        }

        return this.options[index];
    }
}

export default OptionPool;