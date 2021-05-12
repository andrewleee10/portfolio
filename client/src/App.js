import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import AppBar from './components/AppBar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Switch>
          <Route exact path='/portfolio/home'>
            <Home />
          </Route>
          <Route path='/portfolio/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/portfolio/contact'>
            <Contact />
          </Route>
          <Footer />
        </Switch>
      </div>
    </Router>
  )
}

export default App
