import { NextResponse } from "next/server";
export async function POST(request){

    const data = await request.formData();

    const ob = data.get('file')
    console.log(data.get('file'));
    return NextResponse.json({ob})
}