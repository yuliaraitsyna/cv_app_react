export default function ExperienceBlock({data}) {
    return(
        <div id="experience-block">
            <h3>{data.title}</h3>
            <p>Period: {data.date_start} - {data.date_end}</p>
            <p>{data.about}</p>
        </div>
    )
    
}