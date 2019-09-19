import React, {Component} from 'react';
import './App.css';
import DisplayProgress from './DisplayProgress';
import Slider from './Slider';

class App extends Component {
  constructor(){
    super();
    this.state= {
      value:0
    };
  }
  setValue(arg){
    this.setState({
      value: arg
    });
  }
  render(){
    return(
      <div className="App">
        <h1>React Progress Bar</h1>
        <DisplayProgress value={this.state.value}/>
        <Slider value={this.state.value} setValue={this.setValue.bind(this)}/>
    </div>
      )
  }
}
export default App

