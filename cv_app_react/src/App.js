
import './App.css';
import "./styles/Aside.css"
import PersonalForm from './components/Personal Info/PersonalForm';
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <header class="header">Resume Creator</header>
      <main class="main">
        <aside class="aside">
          <PersonalForm/>
        </aside>
        <Resume/>
      </main>
    </div>
  );
}

export default App;
