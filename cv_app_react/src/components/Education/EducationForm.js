
import { useState } from "react"

function EducationForm({ onDelete, id, onSubmit, initialData }) {
    const [educationData, setEducationData] = useState({
        date_start: initialData.date_start || "",
        date_end: initialData.date_end || "",
        university: initialData.university || "",
        degree: initialData.degree || ""
        ///see if working with array
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setEducationData(prev => ({
            ...prev,
            [name]: value.trim()
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(educationData)
    }
    const deleteClick = () => {
        onDelete(id)
    }
    return (
        <div class="education-form">
            <form onClick={deleteClick}>
                <input name="date_start" type="date" placeholder="Start" required onChange={handleInputChange}></input>
                <input name="date_end" type="date" placeholder="End" onChange={handleInputChange}></input>
                <input name="university" type="text" placeholder="University" required onChange={handleInputChange}></input>
                <select name="degree" id="degree-select" required onChange={handleInputChange}>
                    <option class="degree">Undergraduate</option>
                    <option class="degree">Bachelor's degree</option>
                    <option class="degree">Master's degree</option>
                    <option class="degree">Doctoral degree</option>
                    <option class="degree">Other</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
            <button>Delete</button>
        </div>
    )
}

function EducationSection() {
    const [forms, setForms] = useState([{ id: 0 }])

    const addClick = () => {
        setForms(prev => [...prev, { id: prev.length }])
    }

    const deleteClick = (id) => {
        setForms(prev => prev.filter(form => form.id !== id ))
    }

    return (
        <div class="education-section">
            <h3>Education</h3>
            {forms.map((form) => (
                <EducationForm onDelete={deleteClick} key={form.id} id={form.id}/>
            ))}
            <button id="add-education-btn" onClick={addClick}>Add</button>
        </div>
    )
}

export { EducationForm, EducationSection }