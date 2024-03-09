import Education from "../Education/Education"
import Experience from "../Experience/Experience"

class Person {
    #surname
    #name
    #patronymic
    #email
    #phone_number
    #location
    #education = []
    #experience = []

    constructor(surname, name, patronymic, email, phone_number, location, education, experience) {
        this.#surname = surname
        this.#name = name
        this.#patronymic = patronymic
        this.#email = email
        this.#phone_number = phone_number
        this.#location = location
        this.#education = education
        this.#experience = experience
    }

    get full_name() {
        return `${this.#surname} ${this.#name} ${this.#patronymic}`
    }

    get email() {
        return this.#email
    }

    get phone_number() {
        return this.#phone_number
    }

    get location() {
        return this.#location
    }

    get education() {
        return this.#education
    }

    get experience() {
        return this.#experience
    }

    /**
     * @param {string} surname
     */
    set surname(surname) {
        this.#surname = surname
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.#name = name
    }

    /**
     * @param {string} patronymic
     */
    set patronymic(patronymic) {
        this.#patronymic = patronymic
    }

    set email(email) {
        this.#email = email
    }

    set phone_number(phone_number) {
        this.#phone_number = phone_number
    }

    set location(location) {
        this.#location = location
    }

    set education(education) {
        this.#education = education
    }

    set experience(experience) {
        this.#experience = experience
    }

}


let data = new Person (
    "Raitsyna",
    "Yulia",
    "Alexandrovna",
    "yuliaraitsyna@gmail.com",
    "+375447005824",
    "Minsk",
    new Education(
        "01-09-2022",
        "01-07-2026",
        "BSU",
        "Bachelor's"
    ),
    new Experience(

    )
)

export {Person, data}