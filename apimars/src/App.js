import React from 'react';
import './App.css';
import axios from '../node_modules/axios'
import NavBar from './components/NavBar'
import MissionList from './components/MissionList'
import Dialog from './components/Dialog';

class App extends React.Component{
  constructor(){
    super()
    this.state= {
      launches:[],
      isLoaded: false,
      isOpen: false,
    }
  }
  componentDidMount(){
     const API = 'https://api.spacexdata.com/v3/launches';
    axios.get(API)
      .then( response => {
        console.log('Action To Be Perform With Data',response.data)
        this.setState({
          launches:response.data.slice(0,80),
          isLoaded: true
        });
      })
      .catch(error =>{
        console.log(error)
      })
  }
  selectingMission = (rocket) =>{
    this.setState({
      currentMission:rocket
    })
  }
  render(){
    const {isLoaded} = this.state;
    if(!isLoaded){
        return <div>
                  <h2>Loading</h2>
                  <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                  </div>
              </div>  
    }
    else{
    return(
        <div>
          <div className="App">
            <NavBar />
          </div>
          <div >
              <div className="rocket">
                <Dialog isOpen={this.state.isOpen} closeBtn={(e) => this.setState({ isOpen: false })}  
                    currentMission = {this.state.currentMission}
                />
              </div>
          </div>
          <div className = 'cont'>
              <MissionList missions = {this.state.launches}
                selectingMission = {this.selectingMission.bind(this)}
                openBtn ={(e) => this.setState({ isOpen: true })}
              />
          </div>
        </div>
        );
      }
    }
}

export default App;
