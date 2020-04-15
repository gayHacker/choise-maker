class Search {
    /**
     * 
     * @param {Array} values 
     * @param {Function} comparator 
     * @param {boolean} sort            Need to sort or not. values must be sorted. If not yet sorted, set it to true to sort them.
     */
    constructor(values, comparator, sort = true) {
        this.comparator = comparator
        this.values = sort ? Search.sort(values, this.comparator) : values
    }

    /**
     * 
     * @param {Array} arr 
     * @param {Function} comparator 
     * @returns {Array}
     */
    static sort(arr, comparator) {
        return arr.sort(comparator)
    }

    /**
     * Find the element in values which matches needle
     * @param {*} needle 
     * @returns {integer}   Positive integer for the index of the matched value; Nagative integer for the expected index position of the needle while it is not found in values.
     */
    binarySearch(needle) {
        if (this.values.length <= 0) {
            throw new RangeError("\"values\" is empty");
        }

        let min = 0;
        let max = this.values.length - 1
        let mid;

        while (min <= max) {
            mid = this._findMid(min, max)
            let com = this.comparator(this.values[mid], needle)

            if (com > 0.0) {
                min = mid + 1;
            } else if (com < 0.0) {
                max = mid - 1;
            } else {
                return mid;
            }
        }

        return ~(mid - 1);
    }

    _findMid(min, max) {
        return min + ((max - min) >>> 1)
    }
}

export default Search;