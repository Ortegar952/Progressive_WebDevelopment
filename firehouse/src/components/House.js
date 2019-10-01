import React from 'react';

const HouseInfo = (props) =>{
    if(!props.current){
        return <h3>Select A House</h3>
    }else{
        return (
            <div>
                <h3><ins>Details For:</ins> </h3>
                <p><mark>Facility Name:</mark> <strong>{props.current.FacilityName} </strong></p>
                <p><mark>Facility Address:</mark><strong> {props.current.FacilityAddress}</strong></p>
                <p><mark>Borough:</mark> <strong>{props.current.Borough}</strong> </p>
            </div>
        );
    }
}

export default HouseInfo;
