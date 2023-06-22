import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  if (data.username === "roshan" && data.password == "hello")
    return NextResponse.json({ login: true });
  else {
    return NextResponse.json({ login: false });
  }
}
