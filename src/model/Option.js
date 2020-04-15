class Option {
    constructor(name, description = "", quorum = 1, required = []) {
        if (typeof name === "undefined") {
            throw new Error("name is required");
        }

        this.name = name;
        this.description = description;
        this.required = required
        this._quorum = quorum;
    }

    /**
     * @param {number} quorum
     */
    set quorum(quorum) {
        this._quorum = quorum;
    }

    get quorum() {
        return this._quorum;
    }

    get copy() {
        let _required = [];
        this.required.forEach(r => _required.push(r));

        return new Option(this.name, this.description, this._quorum, _required);
    }

    /**
     * Add the required option for the option to be chosen
     * 
     * @param {Option} required 
     */
    require(required) {
        if (!(required instanceof Option)) {
            throw new Error("Invalid param \"required\"");
        }

        this.required.push(required);
    }
}

export default Option;