import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume/Resume'
import ClearButton from './components/Aside/ClearButton';
import {data} from "./components/Personal Info/Person.js"
import { useState } from 'react';


function App() {
  const [personData, setPersonData] = useState(data)
  console.log(personData.education)
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
            initialData={personData} 
            onSubmit={handlePersonSubmit}
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
