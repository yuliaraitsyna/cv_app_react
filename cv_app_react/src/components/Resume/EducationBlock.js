import React from "react"

export default function EducationBlock({education}) {
    return(
        <div>
            <h3>{education.title}</h3>
            <p>{education.degree}</p>
            <p>{education.date_start} - {education.date_end}</p>
        </div>
    )
}