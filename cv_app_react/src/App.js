
import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume/Resume'
import ClearButton from './components/Aside/ClearButton';

function App() {
  return (
    <div className="App">
      <header class="header">Resume Creator</header>
      <main class="main">
        <aside class="aside">
          <ClearButton/>
          <PersonalForm/>
        </aside>
        <Resume/>
      </main>
    </div>
  );
}

export default App;
