
import { useState } from "react";

export default function ExperienceForm({id, onChange, onDelete}) {
    const [experienceData, setExperienceData] = useState({
        title: "",
        date_start: "",
        date_end: "",
        about: "" 
    })

    function handleChange(event) {
        const {name, value} = event.target

        setExperienceData(prev => ({
            ...prev,
            [name]: value.trim()
        }))

        onChange({...experienceData, [name]: value.trim()})
    }

    function handleDeletion() {
       onDelete(id)
    }

    return (
        <div class="experience-form">
            <input name="title" type="text" placeholder="Title" required value={experienceData.title} onChange={handleChange}></input>
            <input name="date_start" type="date" placeholder="Start" required value={experienceData.date_start} onChange={handleChange}></input>
            <input name="date_end" type="date" placeholder="End" value={experienceData.date_end} onChange={handleChange}></input>                
            <input name="about" type="text" placeholder="About" value={experienceData.about} onChange={handleChange}></input>
            <button onClick={handleDeletion}>Delete</button>
        </div>
    )
}