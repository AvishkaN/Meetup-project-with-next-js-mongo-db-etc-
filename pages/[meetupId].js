import { MongoClient,ObjectId } from 'mongodb';
import MeetupDetails from './../components/meetups/MeetupDetails'
import Head from 'next/head';

function meetUpId(props) {
    return (
        <>
        <Head>
            <title>{props.title}</title>
            <meta 
                name={props.title}
                content={props.description}
            />
        </Head>
            <MeetupDetails 
            image={props.meetupData.image} 
            title={props.meetupData.title} 
            address={props.meetupData.address} 
            description={props.meetupData.description}
            />
        </>
    )
}

export async function getStaticPaths(){

//  MongoClient.connect(); 
  
 const client=await MongoClient
    .connect('mongodb+srv://jayathissaMongoUser:asdasedfrasdefsadfsadfsdfdsf@cluster0.2u4vz.mongodb.net/meetups?retryWrites=true&w=majority')
  const db=client.db();
  const meetupCollection=db.collection('meetups');

  const meetups=await meetupCollection.find({},{_id:1}).toArray();

  client.close();


    return {
        fallback:false,
        paths:meetups.map(meetup=>({
            params:{meetupId:meetup._id.toString()},
        }))
        
    };
};


export async function getStaticProps(context){

    // console.log(context.params.meetupId);
    const meetupId=context.params.meetupId;
    console.log(meetupId);
    // api
    const client=await MongoClient
        .connect('mongodb+srv://jayathissaMongoUser:asdasedfrasdefsadfsadfsdfdsf@cluster0.2u4vz.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db();
    const meetupCollection=db.collection('meetups');

    
    const selectedMeetup = await meetupCollection.findOne({
        _id: ObjectId(meetupId),
    });
    console.log(selectedMeetup);

    //

    return {
        props:{
            meetupData:{
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}


export default meetUpId;
