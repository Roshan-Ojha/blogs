"use client";

import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Blog from "./Blog/Blog";
import { useEffect, useState } from "react";
import { fetchData } from "next-auth/client/_utils";
import style from "./page.module.css"
import { useRouter } from "next/navigation";
import useBlogStore from "./store";


export default function Home() {
  const { data: session, status } = useSession();
  const [blogData, setBlogData] = useState("");
  const [whichBlog,setWhichBlog] = useState();

  const addBlog = useBlogStore((state)=>state.setBlog)

  const router = useRouter()

  // console.log(session?.user,status)

  
  useEffect(()=>{
    const fetchdata = async ()=>{
      
      const response = await fetch ("/api/getblog",{method:"GET"})
      const data = await response.json();
      setBlogData(data);
      addBlog(data)
      
    }
    fetchdata()
  }
  
  ,[])

  useEffect(()=>{
    whichBlog!=null?router.push(`/${whichBlog}`):""
    
  },[whichBlog])
 

  if (status === "loading") return null;


  return (
    <div className={style.mainpage}>
      {/* <div>{session?.user ? (
        <button onClick={() => signOut()}>signout</button>
      ) : (
        <button onClick={() => signIn()}>signin</button>
      )}</div> */}
    
      <Blog blog={blogData} selectIndex = {setWhichBlog}></Blog>
      
    </div>
  );
}
