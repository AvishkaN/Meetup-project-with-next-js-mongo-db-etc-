import { MongoClient } from 'mongodb';
import React, { useEffect, useState } from 'react'
import MeetupList from './../components/meetups/MeetupList'




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
