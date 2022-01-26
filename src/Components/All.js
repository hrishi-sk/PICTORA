import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import '../css/all.css'
import Feed from './Feed'
import Nav from './Nav'
import Sidebar from './Sidebar'
import FE from './FE';
import Feedback from './Feedback'
function All() {
    return (
        <Router>
        <div className="allcomp">
            <Nav/>
             
            <div className="content">
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Feed/>
                </Route>
                <Route exact path="/fe">
                    <FE/>
                </Route>
                <Route exact path="/fb">
                    <Feedback/>
                </Route>
            </Switch>
           
            </div>
        </div>
        </Router>
    )
}

export default All
