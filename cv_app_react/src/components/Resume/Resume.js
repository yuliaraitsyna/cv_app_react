import "../../styles/Resume.css"

 export default function Resume({data}) {
    return (
        <div className="resume-container">
            <div id="resume">
                <h1>Resume</h1>
                <h3 id="full-name">{`${data.surname} ${data.name} ${data.patronymic}`}</h3>
                <div class="container">
                    <p id="email">{data.email}</p>
                    <p id="phone-number">{data.phone_number}</p>
                    <p id="location">{data.location}</p>
                </div>
                <div id="education-section">
                   <h2>Education</h2> 
                </div>
                <div id="experience-section">
                   <h2>Experience</h2> 
                </div>
            </div>
        </div>
    )
}