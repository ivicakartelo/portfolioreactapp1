import './App.css';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>  
      <Link to="/">Home</Link> <Link to="/aboutme">About me</Link>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/aboutme" component={AboutMe} />          
        <Route path="/:id" component={BlogPost} />
      </Switch>
    </Router>
  );
}
export default App;