
import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume'
import { ExperienceSection } from './components/Experience/Experience';
import { EducationSection } from './components/Education/EducationForm';
import ClearButton from './components/ClearButton';

function App() {
  return (
    <div className="App">
      <header class="header">Resume Creator</header>
      <main class="main">
        <aside class="aside">
          <ClearButton/>
          <PersonalForm/>
          <EducationSection/>
          <ExperienceSection/>
        </aside>
        <Resume/>
      </main>
    </div>
  );
}

export default App;
