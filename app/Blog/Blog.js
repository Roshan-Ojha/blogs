
import "react-multi-carousel/lib/styles.css";
import parse from "html-react-parser"
import { useEffect, useState } from "react";

import style from "./blog.module.css"

function Blog(props){



     
      
  
    console.log(props.blog.fetchedData)
    return(
        <div className={style.mainblog}>
    

                
                
            {
                props.blog.fetchedData?.map((blog,index)=>{
                    return( 
                        <div className={style.blog} key={index} onClick={()=>props.selectIndex(index)} >
                            <div className={style.img}><img className={style.imges}    src={blog.image}></img></div>
                            <div className={style.right}>
                                <div className={style.title}>{blog.title}</div>
                               
                                {/* <div dangerouslySetInnerHTML={{ __html: blog.body }} /> */}
                                <div className={style.body}>{parse(blog.body)}</div>
                            </div>
                        </div>
                    );
                })
            }

           

        </div>
    );
}

export default Blog;