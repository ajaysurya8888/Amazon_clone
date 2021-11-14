import './App.css';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
   <Router>
     
    <Switch>
      <Route path="/" exact component = {ProductListing} ></Route>
      <Route path="/product/:productId" exact component = {ProductDetails} ></Route>
      <Route >404 not found</Route>
      </Switch>
     
   </Router>
    </div>
  );
}

export default App;
