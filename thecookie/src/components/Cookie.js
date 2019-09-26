import React, {Component} from 'react';
import cookie from '../cookie.png'
class Cookie extends Component{
  constructor(){
      super()
        this.state = {
            clicked: 0
        };
  }
  addClicks = ()=>{
      this.setState({
        clicked: this.state.clicked + 1
       })
       console.log(this.state.clicked)
  }
  subClicks = ()=>{
    if(this.state.clicked !== 0){
        this.setState({
            clicked: this.state.clicked - 1
        })
    
    }
     console.log(this.state.clicked)
}
  
  render(){
    return(
        <div>
            <h1>Cookie Tracker: {this.state.clicked}</h1>
            <img src={cookie} className="App-logo" alt="logo"  />
            <div className='myBtn'>
            <div className='buttons' onClick={this.addClicks}>Add Cookies</div>
            <div className='buttons' onClick={this.subClicks}>Subtract Cookies</div>
        </div>
        </div>
      )
    }
}
export default Cookie
