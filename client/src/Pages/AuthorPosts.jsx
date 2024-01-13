import React, { useState } from 'react'
import { Dummy_Posts } from "../data"
import PostItem from "../Components/PostItem"

const AuthorPosts = () => {

  const [posts, setPosts] = useState(Dummy_Posts)
  
  return (
    <section className="author_posts">
    { posts.length > 0 ? <div className="container author_ posts_container">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID})=> 
            <PostItem  key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
        }
    </div> : <h2 className='center'>No Posts Found</h2>}
</section>
  )
}

export default AuthorPosts