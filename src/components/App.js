import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Calendar from '../shared/Calendar'
import eventsList from '../data/calendarData'
import NavBar from './NavBar'
import Header from './Header'
import GroupDetails from './GroupDetails'
import SlackEmailForm from '../shared/SlackEmailForm'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const App = props => (
  <div>
    <NavBar />
    <Header />
    <div className="App container">
      <div className="row">
        <div className="col-9">
          <GroupDetails />
        </div>
        <div className="col-3">
          <Calendar eventsList={eventsList} />
          <SlackEmailForm />
        </div>
      </div>
    </div>
  </div>
);

export default App;
