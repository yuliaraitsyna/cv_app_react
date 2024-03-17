import { useState } from "react";

export default function PersonalForm({ onSubmit, initialData }) {
    const [data, setPersonalInfo] = useState({
        name: initialData.name || "",
        surname: initialData.surname || "",
        patronymic: initialData.patronymic || "",
        email: initialData.email || "",
        phone_number: initialData.phone_number || "",
        location: initialData.location || ""
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo(prev => ({
            ...prev,
            [name]: value.trim()
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(data);
    };

    return (
        <form className="personal-section" onSubmit={handleSubmit}>
            <h3>Personal info</h3>
            <input name="name" type="text" placeholder="Name" required onChange={handleInputChange} value={data.name}></input>
            <input name="surname" type="text" placeholder="Surname" required onChange={handleInputChange} value={data.surname}></input>
            <input name="patronymic" type="text" placeholder="Patronymic" onChange={handleInputChange} value={data.patronymic}></input>
            <input name="email" type="email" placeholder="Email" required onChange={handleInputChange} value={data.email}></input>
            <input name="phone_number" type="text" placeholder="Phone number" required onChange={handleInputChange} value={data.phone_number}></input>
            <input name="location" type="text" placeholder="Location" required onChange={handleInputChange} value={data.location}></input>
            <button id="submit-person-btn" type="submit">Done</button>
        </form>
    );
}
