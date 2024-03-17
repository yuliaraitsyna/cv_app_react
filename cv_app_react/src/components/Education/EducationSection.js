import EducationForm from "./EducationForm";
import Education from "./Education";
import { useState } from "react";

export default function EducationSection({ onSubmit }) {
    const [educationData, setEducationData] = useState([]);
    const [educationForms, setEducationForms] = useState([]);

    function handleAddition() {
        setEducationForms(prevForms => [
            ...prevForms, 
            { id: prevForms.length, education: { date_start: "", date_end: "", university: "", degree: "" } }
        ]);

        setEducationData(prev => [
            ...prev,
            { date_start: "", date_end: "", university: "", degree: "" }
        ]);
    }

    function handleEducationFormSubmit(index, data) {
        setEducationForms(prev => {
            const bufferForms = [...prev];
            bufferForms[index].education = data;
            return bufferForms;
        });

        const updatedData = educationData.map((item, i) => (i === index ? data : item));
        setEducationData(updatedData);

        onSubmit(updatedData);
    }

    return (
        <div id="education-section">
            <h3>Education</h3>
            {educationForms.map((form, index) => (
                <EducationForm
                    key={form.id}
                    educationObj={form.education}
                    onSubmit={(data) => handleEducationFormSubmit(index, data)}
                />
            ))}
            <button onClick={handleAddition}>Add</button>
        </div>
    );
}
