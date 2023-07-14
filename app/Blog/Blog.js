import { Carousel } from 'react-responsive-carousel';

import { useEffect, useState } from "react";

function Blog(props){

  
    console.log(props.blog.fetchedData)
    return(
        <div>
            {props.blog.fetchedData&&<Carousel>

                {/* <div>muji k vairacha</div> */}
                
            {
                props.blog.fetchedData?.map((blog,index)=>{
                    return(
                        <div key={index} style={{width:"300px"}}>
                            <img src={blog.image}></img>
                            <div>
                                {blog.title}
                            </div>
                        </div>
                    );
                })
            }

            </Carousel>}
        </div>
    );
}

export default Blog;