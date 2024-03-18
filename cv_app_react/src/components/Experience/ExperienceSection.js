import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function ExperienceSection({onSubmit}) {
    const [experienceData, setExperienceData] = useState([])
    const [experienceForms, setExperienceForms] = useState([])

    function handleAddition() {
        setExperienceForms(prev => [
            ...prev,
            {id: prev.length, experience: {title: "", date_start: "", date_end: "", about: ""}}
        ])

        setExperienceData(prev => [
            ...prev,
            {title: "", date_start: "", date_end: "", about: ""}
        ])
    }

    function handleExperienceFormSubmit(index, data) {
        setExperienceForms(prev => {
            const bufferForms = [...prev]
            bufferForms[index].experience = data
            return bufferForms
        })

        const updatedData = experienceData.map((item, i) => (i === index ? data : item))
        setExperienceData(updatedData)

        onSubmit(updatedData)
    }

    function handleDeletion(id) {
        setExperienceForms(prev => prev.filter(form => form.id !== id))
        setExperienceData(prev => prev.filter((_, index) => index !== id))
        onSubmit(experienceData)
    }

    return(
        <div id="experience-section">
            <h3>Experience</h3>
            {experienceForms.map((form, index) => (
                <ExperienceForm
                    id={form.id}
                    key={form.id}
                    onSubmit={(data) => handleExperienceFormSubmit(index, data)}
                    onDelete={() => handleDeletion(form.id)}
                />
            ))}
            <button onClick={handleAddition}>Add</button>
        </div>
    )
}