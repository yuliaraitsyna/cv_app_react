// EducationForm.js
import React, { useState } from 'react';
import Education from './Education';
import EducationForm from './EducationForm';

function EForm({ onDelete, id, onSubmit, educationArr}) {
    const [educationData, setEducationData] = useState({
        date_start: "",
        date_end: "",
        university: "",
        degree: ""
    });

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        setEducationData(prev => ({
            ...prev,
            [name]: value.trim()
        }));

    }

    const handleSubmitClick = (event) => {

        event.preventDefault()

        const newEducation = new Education(
            educationData.date_start,
            educationData.date_end,
            educationData.university,
            educationData.degree
        )

        onSubmit(newEducation)

        setEducationData({
            date_start: newEducation.date_start,
            date_end: newEducation.date_end,
            university: newEducation.univerity,
            degree: newEducation.degree
        })
    }

    const handleDeleteClick = () => {
        onDelete(id);
    }

    return (
        <div className="education-form">
            <form onSubmit={handleSubmitClick}>
                <input name="date_start" type="date" placeholder="Start" required onChange={handleInputChange}></input>
                <input name="date_end" type="date" placeholder="End" onChange={handleInputChange}></input>
                <input name="university" type="text" placeholder="University" required onChange={handleInputChange}></input>
                <select name="degree" id="degree-select" required onChange={handleInputChange}>
                    <option>Undergraduate</option>
                    <option>Bachelor's degree</option>
                    <option>Master's degree</option>
                    <option>Doctoral degree</option>
                    <option>Other</option>
                </select>
                <button type="submit">Add</button>
            </form>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}



function EducationSection({education, onSubmit}) {

    const [educationForms, setEducationForms] = useState([{ id: 0, educationForms: {} }]);

    const handleAddClick = () => {
        setEducationForms(prev => [...prev, { id: prev.length, educationForms: {} }]);
    }

    const handleDeleteClick = (id) => {
        setEducationForms(prev => prev.filter(form => form.id !== id));
    }

    return (
        <div className="education-section">
            <h3>Education</h3>
            
            {educationForms.map((form, ) => (
                <EducationForm 
                    onDelete={handleDeleteClick} 
                    id={form.id} 
                    onSubmit={onSubmit}

                    key={form.id} 
                    educationArr={education}
                />
            ))}

            <button onClick={handleAddClick}>Add</button>
        </div>
    );
}

export { EducationSection };
