
import React, { useState } from "react"
import EducationForm from "./EducationForm"
import Education from "./Education"

export default function EducationSection({ onSubmit }) {
    const [educationForms, setEducationForms] = useState([])

    function handleAddition() {
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

    function handleEducationFormDelete(id) {
        setEducationForms(prevForms => prevForms.filter(form => form.id !== id))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const submittedData = educationForms.map(form => form.education)
        console.log(submittedData)
        onSubmit(submittedData);
    }

    return (
        <form onSubmit={handleSubmit} id="education-section">
            <h3>Education</h3>
            {educationForms.map((form, index) => (
                <EducationForm
                    id={form.id}
                    key={form.id}
                    onChange={(data) => handleEducationFormChange(index, data)}
                    onDelete={() => handleEducationFormDelete(form.id)}
                />
            ))}
            <button onClick={handleAddition}>Add</button>
            <button type="submit">Submit</button>
        </form>
    );
}
