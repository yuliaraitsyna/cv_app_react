export default function EducationBlock({data}) {
    return(
        <div id="education-block">
            <h3>University: {data.university}</h3>
            <p>Period: {data.date_start} - {data.date_end}</p>
            <p>Degree: {data.degree}</p>
        </div>
    )
    
}