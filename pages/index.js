import { MongoClient } from 'mongodb';
import React, { useEffect, useState } from 'react'
import MeetupList from './../components/meetups/MeetupList'
import Head from 'next/head';



function Home(props) {
  console.log(`1`);
  return (
    <>
    <Head>
      <title>meetup list</title>
      <meta 
        name='description'
        content='Add your own meetups and create amazing network opportunities'
      />
    </Head>
          {console.log(`rendering...`)}
            <h1>home</h1>
            <MeetupList meetups={props.meetups}/>
        </>
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
