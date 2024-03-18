import "../../styles/Resume.css";
import EducationBlock from "../Education/EducationBlock";
import ExperienceBlock from "../Experience/ExperienceBlock";

export default function Resume({ data }) {
  return (
    <div className="resume-container">
      <div id="resume">
        <h1>Resume</h1>
        <h3 id="full-name">{${data.surname} ${data.name} ${data.patronymic}}</h3>
        <div className="container">
          <p id="email">{data.email}</p>
          <p id="phone-number">{data.phone_number}</p>
          <p id="location">{data.location}</p>
        </div>
        <div id="education-section">
          <h2>Education</h2>
          {data.education && data.education.length > 0 ? (
            data.education.map((education, index) => (
              <EducationBlock key={index} data={education} />
            ))
          ) : (
            <p>No education information available</p>
          )}
        </div>
        <div id="experience-section">
          <h2>Experience</h2>
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((experience, index) => (
              <ExperienceBlock key={index} data={experience} />
            ))
          ) : (
            <p>No experience information available</p>
          )}
        </div>
      </div>
    </div>
  );
}
