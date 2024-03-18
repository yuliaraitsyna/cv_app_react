export default class Experience {
    #title
    #date_start
    #date_end
    #about
    constructor(title, date_start, date_end, about) {
        this.#title = title
        this.#date_start = date_start
        this.#date_end = date_end
        this.#about = about
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.#title = title
    }

    /**
     * @param {String} about
     */
    set about(about) {
        this.#about = about
    }
    
    /**
     * @param {Date} about
     */
    set date_start(date_start) {
        this.#date_start = date_start
    }

    /**
     * @param {Date} about
     */
    set date_end(date_end) {
        this.#date_end = date_end
    }

    get title() {
        return this.#title
    }

    get date_start() {
        return this.#date_start
    }

    get date_end() {
        return this.#date_end
    }

    get about() {
        return this.#about
    }

    
}