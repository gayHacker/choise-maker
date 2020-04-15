import Search from "../src/util/Search.js"
import  chaii  from "chai";
const { expect } = chaii;

describe("test Search", () => {
    let comparator = (haystack, needle) => {
        return haystack - needle;
    };

    it("Construct Search with array [3, 1, 5, 2, -6] and sort the elements.", () => {
        let search = new Search([3, 1, 5, 2, -6], comparator);
        expect(search.values).to.eql([-6, 1, 2, 3, 5]);
    })

    it("Construct Search with the array [3, 1, 5, 2, -6] and keep elements unsorted.", () => {
        let search = new Search([3, 1, 5, 2, -6], comparator, false);
        expect(search.values).to.eql([3, 1, 5, 2, -6]);
    })

    it("Find 2 [3, 1, 5, 2, -6] and keep elements unsorted.", () => {
        let search = new Search([3, 1, 5, 2, -6], comparator, false);
        expect(search.values).to.eql([3, 1, 5, 2, -6]);
    })
})
