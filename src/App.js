
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Hero from './Hero';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header/>
            <Hero/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
