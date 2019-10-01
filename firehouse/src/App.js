import React from 'react';
import './App.css';
import firehouse from './data/firehouse.json'
import HouseInfo from './components/House'
import HouseList from './components/HouseList'

class App extends React.Component{
  constructor(){
    super()
      this.state = {
        fireData: firehouse,
        currentHouse: null
      }
  }
  selectFireHouse = (house)=>{
    this.setState({
      currentHouse: house,
    })
  }

  render(){
    return (
      <div className="App">
      <h2>Fire Houses </h2>
        <header className="App-header">
            <div className = 'column1'>
              <HouseList 
                fireData={this.state.fireData}
                selectFireHouse = {this.selectFireHouse.bind(this)}
              />
            </div>

            <div className = 'column2'>
              <HouseInfo 
                current = {this.state.currentHouse}
                className = 'secondColum'
              />
            </div>
        </header>
      </div>
    );
  }
}

export default App;

