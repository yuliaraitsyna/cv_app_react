import React, { useState } from "react";

function ExperienceForm({ onDelete, id }) {
    const deleteClick = () => {
        onDelete(id);
    };

    return (
        <div className="experience-form">
            <form>
                <input type="date" placeholder="Start" required />
                <input type="date" placeholder="End" />
                <input type="text" placeholder="Title" required />
                <input type="text" placeholder="About" />
                <button type="submit">Add</button>
            </form>
            <button onClick={deleteClick}>Delete</button>
        </div>
    );
}

function ExperienceSection() {
    const [forms, setForms] = useState([{ id: 0 }]);

    const addClick = () => {
        setForms(prev => [...prev, { id: prev.length }]);
    };

    const deleteClick = (id) => {
        setForms(prev => prev.filter(form => form.id !== id));
    };

    return (
        <div className="experience-section">
            <h3>Experience</h3>
            {forms.map((form) => (
                <ExperienceForm onDelete={deleteClick} key={form.id} id={form.id} />
            ))}
            <button id="add-experience-btn" onClick={addClick}>Add</button>
        </div>
    );
}

export { ExperienceForm, ExperienceSection };
