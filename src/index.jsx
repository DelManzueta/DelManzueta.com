import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Resume } from './components/Resume'
import './styles/styles.css'

class MyPortfolio extends React.Component {
  render () {
    return (
      <Router>
        <div className='main-index'>
          <Header />

          <div className='container'>
            <div className='wrapper'>
              <div className='home'>
                <Switch>
                  <Route exact path='/' component={Hero} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/portfolio' component={Portfolio} />
                  <Route exact path='/resume' component={Resume} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0]

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyPortfolio), container)
