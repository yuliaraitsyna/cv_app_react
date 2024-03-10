import Education from "../Education/Education"
import Experience from "../Experience/Experience"

class Person {
    #surname = ""
    #name = ""
    #patronymic = ""
    #email = ""
    #phone_number = ""
    #location = ""
    #education = []
    #experience = []

    constructor(surname, name, patronymic, email, phone_number, location, education, experience) {
        this.#surname = surname
        this.#name = name
        this.#patronymic = patronymic || ""
        this.#email = email
        this.#phone_number = phone_number
        this.#location = location
        this.#education = education
        this.#experience = experience
    }

    get name(){
        return this.#name
    }

    get surname() {
        return this.#surname
    }

    get patronymic() {
        return this.#patronymic
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

    set surname(surname) {
        this.#surname = surname
    }

    set name(name) {
        this.#name = name
    }

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
    "",
    "",
    "",
    "",
    "",
    "",
    new Education(
        "",
        "",
        "",
        ""
    ),
    new Experience(

    )
)

export {Person, data}