import Search from './components/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <h1>Hello ApiWalker</h1>
        <Search></Search>
        <Switch>
          <Route exact path = "/:category/:id">
            <Display></Display>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;