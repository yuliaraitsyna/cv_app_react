import { useState } from "react";

export default function ExperienceForm() {
    const [experienceData, setExperienceData] = useState({
        title: "",
        date_start: "",
        date_end: "",
        about: "" 
    })

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        setExperienceData(prev => ({
            ...prev,
            [name]: value.trim()
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleDeletion() {
       
    }

    return (
        <div class="experience-form">
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <input name="title" type="text" placeholder="Title" required></input>
                <input name="date_start" type="date" placeholder="Start" required></input>
                <input name="date_end" type="date" placeholder="End"></input>
                <input name="about" type="text" placeholder="About"></input>
                <button type="submit">Submit</button>
                <button type="submit" onClick={handleDeletion}>Delete</button>
            </form>
        </div>
    )
}