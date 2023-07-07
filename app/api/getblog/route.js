import { NextResponse } from "next/server";


export async function POST(req){
    const data = req.json();
    console.log(data)
    return NextResponse.json({message:"Connection completed"})
}
