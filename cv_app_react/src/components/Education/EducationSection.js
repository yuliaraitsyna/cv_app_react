import { useState } from "react";
import Education from "./Education";
import EducationForm from "./EducationForm";

export default function EducationSection({onSubmit}) {
    const [educationForms, setEducationForms] = useState([{ id: 0, education: new Education("", "", "", "") }]) 

    const handleAddFormClick = () => {
        setEducationForms(prev => [
            ...prev,
            {id: prev.length, education: new Education("", "", "", "")}
        ])
    }

    const handleSubmit = (index, data) => {
        setEducationForms(prev => {
            const bufferForms = [...prev]
            bufferForms[index].education = data
            return bufferForms
        })

        onSubmit(data)
    }


    return (
        <div className="education-section">
            <h3>Education</h3>
            
            {educationForms.map((form, index) => (
                <EducationForm 
                    key={form.id}
                    index={index}
                    educationObj={form.education}
                    onSubmit={(data) => handleSubmit(index, data)}
                />
            ))}

            <button onClick={handleAddFormClick}>Add</button>
        </div>
    );
}