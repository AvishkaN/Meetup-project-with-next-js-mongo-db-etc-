import MeetupDetails from './../components/meetups/MeetupDetails'

function meetUpId(props) {
    return (
        <MeetupDetails 
        image={props.meetupData.image} 
        title={props.meetupData.title} 
        address={props.meetupData.address} 
        description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths(){
    return {
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                }
            },
            {
                params:{
                    meetupId:'m2',
                }
            }
        ],
    };
};


export async function getStaticProps(context){
    console.log(context.params.meetupId);

    return {
        props:{
            meetupData:{
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id:context.params.meetupId,
                title:'first meetyup',
                address:'some street,colombo,srilanka',
                description:'this is a first meetup',
            }
        }
    }
}


export default meetUpId;
