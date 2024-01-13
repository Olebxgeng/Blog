import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../assets/avatar1.jpg"

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdgfgs`} className='post_author'>
        <div className="post_author_avatar">
            <img src={Avatar} alt='Author Avatar'/>
        </div>
        <div className="post_author_details">
            <h5>By: Lebo</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor