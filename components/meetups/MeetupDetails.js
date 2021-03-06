import React from 'react';
import clases from './MeetupDetails.module.css';

function MeetupDetails(props) {
    return (
        <section className={clases.detail}>
        <img 
         src={props.image} 
         alt="" 
        />

        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
    )
}

export default MeetupDetails;

