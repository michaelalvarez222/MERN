
import AllProducts from './components/AllProducts';
import NewProduct from './components/NewProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>List Of Products</h1>
      <Link to="/new">Create A New Product</Link><br />
      <Link to="/">Home</Link>

      <Switch>
        <Route exact path = "/">
          <AllProducts></AllProducts>
        </Route>
        <Route exact path="/new">
          <NewProduct></NewProduct>
        </Route>
        <Route exact path="/product/:_id">
          <OneProduct></OneProduct>
        </Route>
        <Route exact path="/product/edit/:_id">
          <EditProduct></EditProduct>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
