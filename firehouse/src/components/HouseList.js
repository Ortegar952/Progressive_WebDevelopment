import React from 'react';
class HouseList extends React.Component{
    renderHouses = () =>{
        return this.props.fireData.map((housee,index)=>{
            return(
                <li key={index} onClick = {()=> this.props.selectFireHouse(housee)} >
                    {housee.FacilityName}
                </li>
            )
        })
    }
    render(){
    return (
       <ol>
           {this.renderHouses()}
       </ol>
    );
  }
}

export default HouseList;
