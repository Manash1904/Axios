import React from 'react'

function Map2(props) {
    
    
  return (
    <div>
        <div>
            {props.posts.map((post)=><div> <div key={post.id}></div>
            TITLE:<div> {post.title}</div>
           CONTENT:<div>{post.content}</div>
            </div>)}
        </div>
      
    </div>)
  
}

export default Map2
