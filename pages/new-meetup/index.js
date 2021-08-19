import React from 'react'
import MeetupForm from './../../components/meetups/NewMeetupForm'

function newMeetup() {

    const onAddMeetup=(meetupData)=>{
        console.log(meetupData);
    };

    return (
        <>
            <MeetupForm onAddMeetup={onAddMeetup}/>
        </>
    )
}

export default newMeetup;
