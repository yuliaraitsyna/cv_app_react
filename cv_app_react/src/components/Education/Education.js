export default class Education {
    #date_start
    #date_end
    #university
    #degree

    constructor(date_start, date_end, university, degree) {
        this.#date_start = date_start
        this.#date_end = date_end
        this.#university = university
        this.#degree = degree
    }

    get date_start() {
        return this.#date_start
    }

    get date_end() {
        return this.#date_end
    }

    get university() {
        return this.#university
    }

    get degree() {
        return this.#degree
    }

    set date_start(date_start) {
        this.#date_start = date_start
    }

    set date_end(date_end) {
        this.#date_end = date_end
    }

    /**
     * @param {string} university
     */
    set univerity(university) {
        this.#university= university
    }

    set degree(degree) {
        this.#degree = degree
    }
}