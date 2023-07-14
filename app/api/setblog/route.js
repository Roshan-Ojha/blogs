import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
export async function POST(request){

    const data = await request.formData();

    // const ob = data.get('file')

    const senddata = new FormData();

    senddata.append('file',data.get('file'));
    senddata.append('upload_preset','blog-uploads')



    const response = await fetch('https://api.cloudinary.com/v1_1/dnwievf0c/image/upload',{
        method:"POST",
        body:senddata
    })
    const res= await response.json();
    console.log(res.secure_url);

    const connect = await MongoClient.connect('mongodb+srv://roshanojha65:yJ7w4MgUy8eBUGo9@cluster1.gdhtfcn.mongodb.net/?retryWrites=true&w=majority');
    const db = connect.db();
    await db.collection("Blogs").insertOne({title:data.get('title'),body:data.get('body'),image:res.secure_url});
    connect.close

    return NextResponse.json({message:"hello"})
}