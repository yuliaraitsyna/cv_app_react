import React from "react"

export default function EducationBlock({education}) {
    return(
        <div>
            <h3>University:{education.university}</h3>
            <p>Degree:{education.degree}</p>
            <p>Period:{education.date_start} - {education.date_end}</p>
        </div>
    )
}