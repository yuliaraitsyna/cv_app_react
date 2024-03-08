export default class Experience {
    #date_start
    #date_end
    #title
    #about

    constructor(date_start, date_end, title, about) {
        this.#date_start = date_start
        this.#date_end = date_end
        this.#title = title
        this.#about = about
    }

    get date_start() {
        return this.#date_start
    }

    get date_end() {
        return this.#date_end
    }

    get title() {
        return this.#title
    }

    get about() {
        return this.#about
    }

    set date_start(date_start) {
        this.#date_start = date_start
    }

    set date_end(date_end) {
        this.#date_end = date_end
    }

    set title(title) {
        this.#title = title
    }

    set about(about) {
        this.#about = about
    }
}