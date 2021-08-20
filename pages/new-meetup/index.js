import router, { useRouter } from 'next/router';
import React from 'react'
import MeetupForm from './../../components/meetups/NewMeetupForm'

function newMeetup() {
    const roter= useRouter();

    const onAddMeetup=async (enteredMeetupData)=>{
        console.log(roter);
        console.log(enteredMeetupData);

      // add meetup details to api  
      const response=await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
      })

      const data=await response.json();
      console.log(data);
      router.push('/');
    };

    return (
        <>
            <MeetupForm onAddMeetup={onAddMeetup}/>
        </>
    )
}

export default newMeetup;
