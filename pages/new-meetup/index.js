import  { useRouter } from 'next/router';
import React from 'react'
import MeetupForm from './../../components/meetups/NewMeetupForm'
import Head from 'next/head';

function NewMeetup() {
    const router= useRouter();

    const onAddMeetup=async (enteredMeetupData)=>{
        console.log(router);
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
        <Head>
            <title>Add new meetup</title>
            <meta 
                name='description'
                content='Add your own meetup '
            />
        </Head>
            <MeetupForm onAddMeetup={onAddMeetup}/>
        </>
    )
}

export default NewMeetup;
