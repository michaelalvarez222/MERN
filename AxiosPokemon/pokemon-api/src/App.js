import './App.css';
import PokemonWithAxios from './components/PokemonWithAxios';
import Pokemon from './components/Pokemon';
function App() {


  return (
    <div className="App">
      <h1>Not all but some of your Favorite Pokemon!</h1>
      <PokemonWithAxios></PokemonWithAxios>
    </div>
  );
  
}

export default App;
