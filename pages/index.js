import { MongoClient } from 'mongodb';
import React, { useEffect, useState } from 'react'
import MeetupList from './../components/meetups/MeetupList'

// const DUMMY_MEETUPS = [
//     {
//       id: 'm1',
//       title: 'A First Meetup',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Some address 5, 12345 Some City',
//       description: 'This is a first meetup!'
//     },
//     {
//       id: 'm2',
//       title: 'A Second Meetup',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Some address 10, 12345 Some City',
//       description: 'This is a second meetup!'
//     }
// ];



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

// 1) getStaticProps
export async function getStaticProps(){

  
  MongoClient.connect();
  const client=await MongoClient
    .connect('mongodb+srv://jayathissaMongoUser:asdasedfrasdefsadfsadfsdfdsf@cluster0.2u4vz.mongodb.net/meetups?retryWrites=true&w=majority')
  const db=client.db();
  const meetupCollection=db.collection('meetups');

  const meetups=await meetupCollection.find().toArray();

  client.close();

  // fetch data from an api
  return{
    props:{
      meetups:meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString(),
      }) )
    },
    revalidate:1,
  };
};

//2) get servers side props

// export async function getServerSideProps(context){
//   const req=context.teq;
//   const res=context.res;

//   return{
//     props:{
//       meetups:DUMMY_MEETUPS,
//     }
//   }
// };



export default Home;
