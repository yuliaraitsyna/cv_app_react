
import { useState } from "react"

function EducationForm({ onDelete, id }) {
    const deleteClick = () => {
        onDelete(id)
    }
    return (
        <div class="education-form">
            <form>
                <input type="date" placeholder="Start" required></input>
                <input type="date" placeholder="End"></input>
                <input type="text" placeholder="University" required></input>
                <select id="degree-select" required>
                    <option class="degree">Undergraduate</option>
                    <option class="degree">Bachelor's degree</option>
                    <option class="degree">Master's degree</option>
                    <option class="degree">Doctoral degree</option>
                    <option class="degree">Other</option>
                </select>
                <button type="submit">Add</button>
            </form>
            <button onClick={deleteClick}>Delete</button>
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