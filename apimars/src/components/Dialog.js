import React, { Component } from 'react';
import RocketDetails from './RocketDetails'
class Dialog extends Component {
    render() {
        let dialog = (
            <div className='modal-view' >
                <div className='closeBtn' onClick={this.props.closeBtn}>Close</div>  
                <RocketDetails info = {this.props.currentMission}/>
            </div>
        );

        if(!this.props.isOpen){
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Dialog;
