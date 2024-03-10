
import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume/Resume'
import { ExperienceSection } from './components/Experience/ExperienceForm';
import { EducationSection } from './components/Education/EducationForm';
import ClearButton from './components/Aside/ClearButton';
import {data} from "./components/Personal Info/Person.js"
import { useState } from 'react';


function App() {

  const [personData, setPersonData] = useState(data)

  const handleSubmit = (updatedData) => {
      setPersonData(updatedData)
  }

  return (
    <div className="App">
      <header class="header">Resume Creator</header>
      <main class="main">
        <aside class="aside">
          <ClearButton/>
          <PersonalForm initialData={personData} onSubmit={handleSubmit}/>
          <EducationSection/>
          <ExperienceSection/>
        </aside>
        <Resume data = {personData}/>
      </main>
    </div>
  );
}

export default App;
