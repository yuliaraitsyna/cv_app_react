
import { useState } from "react"

function EducationForm() {
    return (
        <form class="education-form">
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
            <div class="btn-container">
                <button type="submit">Add</button>
                <button>Delete</button>
            </div>
        </form>
    )
}

function EducationSection() {
    const [forms, setForms] = useState([<EducationForm key={0}/>])

    const addClick = () => {
        setForms(prev => [...prev, <EducationForm key={prev.length}/>])
    }

    return (
        <div class="education-section">
            Education
            {forms.map((form, index) => (
                <div key={index}>
                    {form}
                </div>
            ))}
            <button id="add-education-btn" onClick={addClick}>Add</button>
        </div>
    )
}

export { EducationForm, EducationSection }