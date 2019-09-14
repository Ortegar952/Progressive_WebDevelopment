import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard'
import Squad from './Squad';

function App(){
  return(
    <div className="App">
      <ProfileCard SquadList={Squad} />
    </div>
  );
}

export default App;

// . Now that one of them works, in your App.js create a function called renderProfiles().
//  It should be inside your function,
//  but outside of the return statement. 
// This function should map over an array,
//  and pass the properties of each object from squad.js 
//  to pass into ProfileCard.js.
//  Use this function in the return statement so that it 
// returns multiple profiles to display
