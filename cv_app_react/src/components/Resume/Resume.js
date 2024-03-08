import "../styles/Resume.css"

 export default function Resume(data) {
    return (
        <div className="resume-container">
            <div id="resume">
                <h1>Resume</h1>
                <h3 id="full-name">{data.fullname}</h3>
                <div class="container">
                    <p id="email">{data.email}</p>
                    <p id="phone-number">{data.phone_number}</p>
                </div>
                <div id="education-section">
                   <h1>Education</h1> 
                </div>
                <div id="experience-section">
                   <h1>Experience</h1> 
                </div>
            </div>
        </div>
    )
}