import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from '../public/Home'
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
          <Route exact path='/react-portfolio/'>
            <Home />
          </Route>
          <Route path='/react-portfolio/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/react-portfolio/contact'>
            <Contact />
          </Route>
          <Footer />
        </Switch>
      </div>
    </Router>
  )
}

export default App
