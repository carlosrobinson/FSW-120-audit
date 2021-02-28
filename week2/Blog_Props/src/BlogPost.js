import React from "react"

function BlogPost (props){ 
            return(
                <div id= "myBlogs">
                    <main>

                    <h2>
                        {props.title}
                    </h2>
                    <h3 style= {{display: !props.subTitle && "none"}}> 
                        {props.subTitle}
                        </h3>
                    <h5>
                        Posted by:{`${props.author} on ${props.date}`} 
                    </h5>
                    </main>
                </div>
            )
}

export default BlogPost