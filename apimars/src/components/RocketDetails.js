import React from 'react';

const RocketDetails = (props) =>{
    console.log('data from the Dialog', props.info)
    console.log('youtube link', props.info.links.video_link)
        let launchSucess = '';
        let rocketReasons = '';

        if(props.info.launch_success){
            launchSucess = 'Sucessful';
            rocketReasons =  'No Engine Failure'
        }
        else if(!props.info.launch_success){
            launchSucess = 'Unsuccessful';
            rocketReasons = props.info.launch_failure_details.reason;
        }
        return (
            <div className='details-render'>
                <h1>{props.info.mission_name}</h1>
                <img src={props.info.links.mission_patch} alt='patch-logo'/>
                <p><b>Rocket Name:</b>   {props.info.rocket.rocket_name}</p>
                <p><b>Flight Number:</b> {props.info.flight_number} </p>
                <p><b>Payload Type:</b>  {props.info.rocket.second_stage.payloads[0].payload_id} </p>
                <p><b>Manufacturer:</b>  {props.info.rocket.second_stage.payloads[0].manufacturer} </p>
                <p><b>Launch Year:</b>   {props.info.launch_year}</p>
                <p><b>Launch Site:</b>   {props.info.launch_site.site_name_long}</p>
                <p><b>Launch Success:</b> {launchSucess}</p>
                <p><b>Reasons:</b> {rocketReasons}</p>
                <h3> External Links </h3>
                <p className='external-links'><b> Video Launch:</b> <a href={props.info.links.video_link} target='_blank'  rel="noopener noreferrer"> Watch Launch</a></p>
                <p className='external-links'><b> More Information:</b> <a href={props.info.links.article_link} target='_blank'  rel="noopener noreferrer"> Mission Article</a></p>
                <p className='external-links'><b> Wikipedia Article:</b> <a href={props.info.links.wikipedia} target='_blank'  rel="noopener noreferrer"> Mission Full Details</a></p>
            </div>
        );
    
}

export default RocketDetails;