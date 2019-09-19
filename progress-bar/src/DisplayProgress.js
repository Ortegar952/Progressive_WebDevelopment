import React, {Component} from 'react';
import ProgressBar from './ProgressBar';

class DisplayProgress extends Component {
    getStatus(currentValue){
        if(currentValue == 100){
            return 'Complete !';
        }else{
            return 'In Progress - ' + currentValue;
        }
    }
    getStyles(percentage){
        if(percentage < 33){
            return 'low';
        }else if(percentage > 32 && percentage < 66){
            return 'medium';
        }else if(percentage > 65){
            return 'high';
        }
    }
    render(){
    return(
        <div>
        <h3>{this.getStatus(this.props.value)}</h3>
        <ProgressBar 
             width={this.props.value}
             class={this.getStyles(this.props.value)} /> 
        </div>
      )
  }
}
export default DisplayProgress

