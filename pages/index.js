import React, { useEffect, useState } from 'react'
import MeetupList from './../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup!'
    },
    {
      id: 'm2',
      title: 'A Second Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup!'
    }
];



function Home(props) {
  console.log(`1`);
  return (
    <div>
          {console.log(`rendering...`)}
            <h1>home</h1>
            <MeetupList meetups={props.meetups}/>
        </div>
  )
}

export async function getStaticProps(){
  // fetch data from an api
  return{
    props:{
      meetups:DUMMY_MEETUPS
    },
    revalidate:1,
  };
};


export default Home;
