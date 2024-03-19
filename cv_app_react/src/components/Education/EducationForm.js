// EducationForm.js
import React, { useState } from "react";
import Education from "./Education"

export default function EducationForm({ id, onChange, onDelete }) {
    const [educationData, setEducationData] = useState({
        date_start: "",
        date_end: "",
        university: "",
        degree: "Undergraduate"
    });

    function handleChange(event) {
        const { name, value } = event.target

        setEducationData(prevData => ({
            ...prevData,
            [name]: value.trim()
        }))

        onChange({ ...educationData, [name]: value.trim() })
    }

    function handleDelete() {
        onDelete(id);
    }

    return (
        <div className="education-form">
            <div>
                <input name="date_start" type="date" placeholder="Start" required value={educationData.date_start} onChange={handleChange} />
                <input name="date_end" type="date" placeholder="End" value={educationData.date_end} onChange={handleChange} />
                <input name="university" type="text" placeholder="University" required value={educationData.university} onChange={handleChange} />
                <select name="degree" id="degree-select" required value={educationData.degree} onChange={handleChange}>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value="Doctoral degree">Doctoral degree</option>
                    <option value="Other">Other</option>
                </select>
                <button type="button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
