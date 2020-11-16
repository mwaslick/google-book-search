import logo from './logo.svg';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Search from './pages/Search'
import Save from './pages/Save'
import './App.css';

function App() {
  return (
    <Router>
       <Header />
        <Container>
         <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/save" component={Save} />
      </Container>
</Router>
  )
}

export default App;
