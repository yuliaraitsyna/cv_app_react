import { useState } from "react";
import Education from "./Education";

export default function EducationForm ({key, onSubmit}) {
    const [educationData, setEducationData] = useState({
        date_start: "",
        date_end:"",
        university: "",
        degree: "Undergraduate"
    })

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        setEducationData(prev => ({
            ...prev,
            [name]: value.trim()
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(educationData)
    }


    return(
        <div class="education-form">
            <form onChange={handleChange} onSubmit={handleSubmit}> 
                <input name="date_start" type="date" placeholder="Start" required></input>
                <input name="date_end" type="date" placeholder="End"></input>
                <input name="university" type="text" placeholder="University" required></input>
                <select name="degree" id="degree-select" required>
                    <option class="degree">Undergraduate</option>
                    <option class="degree">Bachelor's degree</option>
                    <option class="degree">Master's degree</option>
                    <option class="degree">Doctoral degree</option>
                    <option class="degree">Other</option>
                </select>
                <button type="submit">Submit</button>
                <button type="submit">Delete</button>
            </form>
        </div>
    )
}