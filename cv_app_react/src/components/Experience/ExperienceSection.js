import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceSection({onSubmit}) {
    const [experienceForms, setExperienceForms] = useState([])

    function handleAddition(event) {
        event.preventDefault()

        setExperienceForms(prev => [
            ...prev,
            {id: prev.length, experience: {
                title: "", 
                date_start: "", 
                date_end: "", 
                about: ""
            }}
        ])

    }

    function handleExperienceFormChange(index, data) {
        setExperienceForms(prev => {
            const updatedForms = [...prev]
            updatedForms[index] = {...updatedForms[index], experience: data}
            return updatedForms
        })
    }

    function handleDeletion(id) {
        setExperienceForms(prev => prev.filter(form => form.id !== id))
    }

    function handleSubmit(event) {
        event.preventDefault()

        const submittedData = experienceForms.map(form => form.experience)

        onSubmit(submittedData)
    }

    return(
        <form onSubmit={handleSubmit} id="experience-section">
            <h3>Experience</h3>
            {experienceForms.map((form, index) => (

                <ExperienceForm
                    id={form.id}
                    key={form.id}
                    onChange={(data) => handleExperienceFormChange(index, data)}
                    onDelete={() => handleDeletion(form.id)}
                />
                
            ))}
            <button onClick={handleAddition}>Add</button>
            <button type="submit">Submit</button>
        </form>
    )
}