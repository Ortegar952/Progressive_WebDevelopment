import React from 'react';
import ProfileInfo from './ProfileInfo'
import Squad from './Squad';

class ProfileCard extends React.Component{
    renderProfile(arr){
      return arr.map((friend) =>  <ProfileInfo friendList={friend}/>)
    }
  render(){
    return(
      <div className="id-card-wrapper">
        <div className="id-card">
           {this.renderProfile(this.props.SquadList)}
        </div>
      </div>
      )
  }
}

export default ProfileCard;

