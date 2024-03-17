import { useState } from "react";
import Education from "./Education";

export default function EducationForm({index, onSubmit}) {
    const [educationObjData, setEducationObjData] = useState({
        date_start: "",
        date_end: "",
        university: "",
        degree: ""
    })

    const handleInputChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target

        setEducationObjData(prev => ({
            ...prev,
            [name]: value.trim()
        }))

    }

    const handleSubmitClick = (event) => {
        event.preventDefault()

        const newEducationObjData = new Education(
            educationObjData.date_start,
            educationObjData.date_end,
            educationObjData.university,
            educationObjData.degree
        )

        setEducationObjData(newEducationObjData)
        onSubmit(index, newEducationObjData)
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
                <button type="submit">Submit</button>
            </form>
            <button>Delete</button>
        </div>
    );
}
