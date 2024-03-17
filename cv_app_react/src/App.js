import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume/Resume'
import ClearButton from './components/Aside/ClearButton';
import EducationForm from './components/Education/EducationForm.js'
import {data} from "./components/Personal Info/Person.js"
import { useState } from 'react';
import EducationSection from './components/Education/EducationSection.js';


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
          
        </aside>
        <Resume 
          data={personData}
        />
      </main>
    </div>
  );
}

export default App;
