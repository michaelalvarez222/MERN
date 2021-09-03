import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard nameOfPerson="Alvarez,Michael" age={22}>
        black
      </PersonCard>
      <PersonCard nameOfPerson="James,Lebron" age={37}>
        bald
      </PersonCard>
      <PersonCard nameOfPerson="Jeter,Derek" age={47}>
        also bald
      </PersonCard>
      <PersonCard nameOfPerson="Hill,Tyreek" age={27}>
        short dreads i think
      </PersonCard>
    </div>
  );
}

export default App;
