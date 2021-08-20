import { MongoClient } from 'mongodb';
import MeetupDetails from './../components/meetups/MeetupDetails'

function meetUpId(props) {
    return (
        <>
        {/* {console.log(props)} */}
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

 MongoClient.connect(); 
  const client=await MongoClient
    .connect('mongodb+srv://jayathissaMongoUser:asdasedfrasdefsadfsadfsdfdsf@cluster0.2u4vz.mongodb.net/meetups?retryWrites=true&w=majority')
  const db=client.db();
  const meetupCollection=db.collection('meetups');

  const meetups=await meetupCollection.find({},{_id:1}).toArray();

  console.log(typeof meetups[0]._id.toString());

     const paths=meetups.map(meetup=>({
            params:{meetupId:meetup._id.toString()},
        }))

        console.log(paths);

    return {
        fallback:false,
        paths:meetups.map(meetup=>({
            params:{meetupId:meetup._id.toString()},
        }))
        
    //    paths:[
    //         {
    //             params:{
    //                 meetupId:'m1',
    //             }
    //         },
    //         {
    //             params:{
    //                 meetupId:'m2',
    //             }
    //         }
    //     ],
    };
};


export async function getStaticProps(context){
    // console.log(context.params.meetupId);

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
