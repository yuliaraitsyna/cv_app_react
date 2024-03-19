import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume/Resume'
import ClearButton from './components/Aside/ClearButton';
import { data } from "./components/Personal Info/Person.js"
import { useState } from 'react';
import EducationSection from './components/Education/EducationSection.js';
import ExperienceSection from './components/Experience/ExperienceSection.js';

function App() {
  const [personData, setPersonData] = useState({ 
    ...data,
    education: []
  });
  console.log("Initial personData:", personData);

  const handlePersonSubmit = (updatedData) => {
    console.log("Submitted personal data:", updatedData);
    setPersonData(updatedData);
  }

  const handleEducationSubmit = (updatedEducationData) => {
    console.log("Submitted education data:", updatedEducationData);
    const updatedData = {
      ...personData,
      education: updatedEducationData
    }
    setPersonData(updatedData);
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
          <ExperienceSection />
        </aside>
        <Resume 
          data={personData}
        />
      </main>
    </div>
  );
}

export default App;
