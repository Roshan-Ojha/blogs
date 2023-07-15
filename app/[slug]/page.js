"use client"

import useBlogStore from "../store";
import style from "./slug.module.css";
import parse from "html-react-parser"

export default function Page({params}){

    const data = useBlogStore((state)=>state.blog)
    // console.log(data.fetchedData[params.slug])
    const blog = data.fetchedData[params.slug]
    return(
        <div className={style.main}>
            <div className={style.title}>{blog.title}</div>
            <div className={style.imagebody}><img src={blog.image}/></div>
            <div>{parse(blog.body)}</div>
        </div>
    )
}