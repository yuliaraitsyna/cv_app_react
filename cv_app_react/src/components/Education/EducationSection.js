
import React, { useState } from "react"
import EducationForm from "./EducationForm"

export default function EducationSection({onSubmit}) {
    const [educationForms, setEducationForms] = useState([])

    function handleAddition(event) {
        event.preventDefault()
        setEducationForms(prevForms => [
            ...prevForms,
            { id: educationForms.length, education: {
                date_start: "",
                date_end: "",
                university: "",
                degree: "Undergraduate"
            }}
        ])
    }

    function handleEducationFormChange(index, data) {
        setEducationForms(prevForms => {
            const updatedForms = [...prevForms]
            updatedForms[index] = { ...updatedForms[index], education: data }
            return updatedForms
        })
    }

    function handleDelete(id) {
        setEducationForms(prevForms => prevForms.filter(form => form.id !== id))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const submittedData = educationForms.map(form => form.education)
        onSubmit(submittedData)
    }

    return (
        <form onSubmit={handleSubmit} id="education-section">
            <h3>Education</h3>
            {educationForms.map((form, index) => (
                <EducationForm
                    id={form.id}
                    key={form.id}
                    onChange={(data) => handleEducationFormChange(index, data)}
                    onDelete={() => handleDelete(form.id)}
                />
            ))}
            <button onClick={handleAddition}>Add</button>
            <button type="submit">Submit</button>
        </form>
    );
}
