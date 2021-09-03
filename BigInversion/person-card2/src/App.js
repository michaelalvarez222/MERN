import logo from './logo.svg';
import './App.css';
import PersonCard2 from './components/PersonCard2';

function App() {
  return (
    <div className="App">
      <h1>Welcome People!</h1>
      <PersonCard2 nameOfPerson="Alvarez,Michael" age={22}>
        black
      </PersonCard2>
      <PersonCard2 nameOfPerson="James,Lebron" age={37}>
        bald
      </PersonCard2>
      <PersonCard2 nameOfPerson="Jeter,Derek" age={47}>
        also bald
      </PersonCard2>
      <PersonCard2 nameOfPerson="Hill,Tyreek" age={27}>
        short dreads i think
      </PersonCard2>
    </div>
  );
}

export default App;
