import React from "react"

export default function EducationBlock({education}) {
    return(
        <div>
            <h2>{education.title}</h2>
            <p>{education.degree}</p>
            <p>{education.date_start} - {education.date_end}</p>
        </div>
    )
}