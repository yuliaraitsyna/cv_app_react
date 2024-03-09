import { useState } from "react"
import { data } from "./PErson"
export default function PersonalForm() {
    const [, setPersonalInfo] = useState({
        name: data.name,
        surname: data.surname,
        patronymic: data.patronymic,
        email: data.email,
        phone_number: data.phone_number,
        location: data.location
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setPersonalInfo(prev => ({
            ...prev,
            [name]: value.trim()
        }))
        data[name] = value.trim()
    }

    return (
        <form class="personal-section">
            <h3>Personal info</h3>
            <input name="name" type="text" placeholder="Name" required onChange={handleInputChange}></input>
            <input surname="surname" type="text" placeholder="Surname" required onChange={handleInputChange}></input>
            <input patronymic="patronymic" type="text" placeholder="Patronymic" onChange={handleInputChange}></input>
            <input name="email" type="email" placeholder="Email" required onChange={handleInputChange}></input>
            <input name="phone_number" type="text" placeholder="Phone number" required onChange={handleInputChange}></input>
            <input name="location" type="text" placeholder="Location" required onChange={handleInputChange}></input>
            <button id="submit-person-btn" type="submit">Done</button>
        </form>
    )
}