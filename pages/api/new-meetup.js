//localhost:3000/api/new-meetup


import {MongoClient} from 'mongodb';

async function handler(req,res){
    console.log(req);
    if (req.method==='POST'){
        const data=req.body;

        // const {title,image,address,description}=data;

        const client=await MongoClient.connect('mongodb+srv://jayathissaMongoUser:asdasedfrasdefsadfsadfsdfdsf@cluster0.2u4vz.mongodb.net/meetups?retryWrites=true&w=majority')
        const db=client.db();
        const meetupCollection=db.collection('meetups');

        
       const result=await meetupCollection.insertOne(data);

       client.close();

       res.status(201).json({message:'meetup inserted'});

    }
};

export default handler;