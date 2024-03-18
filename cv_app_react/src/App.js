import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume/Resume'
import ClearButton from './components/Aside/ClearButton';
import {data} from "./components/Personal Info/Person.js"
import { useState } from 'react';
import EducationSection from './components/Education/EducationSection.js';
import ExperienceSection from './components/Experience/ExperienceSection.js';


function App() {
  const [personData, setPersonData] = useState(data)
  console.log(personData)
  const handlePersonSubmit = (updatedData) => {
      setPersonData(updatedData)
  }

  const handleEducationSubmit = (updatedEducationData) => {
    const updatedData = {
      ...personData,
      education: updatedEducationData
    }
    setPersonData(updatedData)
  }

  const handleExperienceSubmit = (updatedExperienceData) => {
    const updatedData = {
      ...personData,
      experience: updatedExperienceData
    }
    setPersonData(updatedData)
  }

  return (
    <div className="App">
      <header className="header">Resume Creator</header>
      <main className="main">
        <aside className="aside">

          <ClearButton/>

          <PersonalForm 
            onSubmit={handlePersonSubmit}
          />

          <EducationSection
            onSubmit={handleEducationSubmit}
          />

          <ExperienceSection
            onSubmit={handleExperienceSubmit}
          />
          
        </aside>
        <Resume 
          data={personData}
        />
      </main>
    </div>
  );
}

export default App;
