import React, { Component } from 'react';
import Cookie from './components/Cookie';
import Calendar from 'react-calendar';


import './App.css';

class App extends Component {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({date})


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Cookie />
        </header>
        {/* <div className = 'Calendar-Comp'>
          <Mycalendar />
        </div> */}
        <div className='Calendar'>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
      </div>
    );
  }
}

export default App;
