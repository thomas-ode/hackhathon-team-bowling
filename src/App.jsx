import './App.css';
import './main.css'
import HomeDark from './Components/pages/HomeDark'
import Error from './Components/Home/Error'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Drugs from './Components/pages/Drugs';
import Alcohol from './Components/pages/Alcohol';
import Weapons from './Components/pages/Weapons';
import Element from './Components/pages/Element';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Error} />
          <Route path="/Element" component={Element} />
          <Route path="/Alcohol" component={Alcohol} />
          <Route path="/Drugs" component={Drugs} />
          <Route path="/Weapons" component={Weapons} />
          <Route path="/HomeDark" component={HomeDark} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;