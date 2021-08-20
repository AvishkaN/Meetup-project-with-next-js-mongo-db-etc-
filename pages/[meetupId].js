import { MongoClient } from 'mongodb';
import MeetupDetails from './../components/meetups/MeetupDetails'

function meetUpId(props) {
    return (
        <>
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

    console.log(context.params.meetupId);

    // api



    //

    return {
        props:{
            meetupData:{
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id:context.params.meetupId,
                title:'first meetyup',
                address:'some street,colombo,srilanka',
                description:'this is a first meetup',
            },
        }
    }
}


export default meetUpId;
