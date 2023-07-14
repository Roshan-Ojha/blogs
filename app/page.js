"use client";

import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Blog from "./Blog/Blog";
import { useEffect, useState } from "react";
import { fetchData } from "next-auth/client/_utils";

export default function Home() {
  const { data: session, status } = useSession();
  const [blogData, setBlogData] = useState("");

  console.log(session?.user,status)

  
  useEffect(()=>{
    const fetchdata = async ()=>{
      
      const response = await fetch ("/api/getblog",{method:"GET"})
      const data = await response.json();
      setBlogData(data);
      
    }
    fetchdata()
  }
  
  ,[])
  

 

  if (status === "loading") return null;


  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>signout</button>
      ) : (
        <button onClick={() => signIn()}>signin</button>
      )}
      <Blog blog={blogData}></Blog>
    </div>
  );
}
