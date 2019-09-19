import React, {Component} from 'react';

class Slider extends Component{
  render(){
    return(
         <input type="range" min="0" max="100" value={this.props.value} onChange={(e)=>this.props.setValue(e.target.value)}  />
    );
  }
}

export default Slider;