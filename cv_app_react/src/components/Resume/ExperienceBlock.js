import React from "react"

export default function ExperienceBlock({experience}) {
    return(
        <div>
            <h3>{experience.title}</h3>
            <p>{experience.date_start} - {experience.date_end}</p>
            <p>{experience.about}</p>
        </div>
    )
}