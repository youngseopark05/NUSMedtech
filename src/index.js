import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import BizConPage from './views/biz-con-page'
import Pubs from './views/pubs'
import VidEdPage from './views/vid-ed-page'
import EvePlanPage from './views/eve-plan-page'
import Home from './views/home'
import WebDevPage from './views/web-dev-page'
import Projects from './views/projects'
import Events from './views/events'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={BizConPage} exact path="/biz-con-page" />
        <Route component={Pubs} exact path="/pubs" />
        <Route component={VidEdPage} exact path="/vid-ed-page" />
        <Route component={EvePlanPage} exact path="/eve-plan-page" />
        <Route component={Home} exact path="/" />
        <Route component={WebDevPage} exact path="/web-dev-page" />
        <Route component={Projects} exact path="/projects" />
        <Route component={Events} exact path="/events" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
