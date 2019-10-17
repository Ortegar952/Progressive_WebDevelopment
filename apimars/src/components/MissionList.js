import React from 'react';
// import SearchBar from './SearchBar'

class MissionList extends React.Component{
    constructor(){
        super();
        this.state = {
            userText: ''
        }
    }
    updateText(event){
        this.setState({
            userText: event.target.value
        })
        console.log(this.state.userText)
    }
    renderMissions = () =>{
        return this.props.missions.map((mission,flightNum)=>{
            if( this.state.userText !== '' && mission.mission_name.toLowerCase().indexOf(this.state.userText.toLowerCase()) === -1){
                return null;
            }
            return(
                <div className="holders" key = {flightNum} >
                    <h2>Flight Num: {mission.flight_number}</h2>
                    <div className= 'picture'>
                        <img src = {mission.links.mission_patch} alt='Patch_Logo' />
                        <div className="text">
                            <h3>Mission Name: {mission.mission_name}</h3>
                            <button className='button' onClick={() => {this.props.selectingMission(mission);this.props.openBtn();}} >View More</button>
                        </div>
                    </div>
			    </div>    
            )
        })
    }  
    render(){   
    return (
    <div>
        <div>
            <div className="wrap" >
                <div className="search">
                <input type="text" className="searchTerm" placeholder="Enter Mission's Name" 
                        value = {this.state.userText}
                        onChange = {this.updateText.bind(this)}
                />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
                </div>
            </div>
           
        </div>
        <div>
            {this.renderMissions()}
        </div>
    </div>
    );
  }
}

export default MissionList;

