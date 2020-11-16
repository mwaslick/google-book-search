import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from './pages/Search'
import Save from './pages/Save'
import './App.css';

function App() {
  return (
    <Router>
       <Header />
        <Switch>
         <Route exact path="/">
           <Search />
         </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/save">
          <Save />
          </Route>
      </Switch>
    </Router>
  )
}

export default App;
