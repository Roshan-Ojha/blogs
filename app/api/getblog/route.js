import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function GET(){

    const connect = await MongoClient.connect('mongodb+srv://roshanojha65:yJ7w4MgUy8eBUGo9@cluster1.gdhtfcn.mongodb.net/?retryWrites=true&w=majority');
    const db = connect.db();
    const fetchedData = await db.collection("Blogs").find().toArray();
    console.log(fetchedData);

    return NextResponse.json({fetchedData})
}