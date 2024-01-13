import React, { useState } from 'react'
import { Dummy_Posts } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [posts, setPosts] = useState(Dummy_Posts)
  return (
    <section className="dashboeard">
      {
        posts.length > 0 ? <div className="container dashboard_container">
            {
            
              posts.map(post => {
                return <article key={post.id} className="dashboard_post">
                  <div className="dashboard_post_info">
                    <div className="dashboard_post_thumbnail">
                      <img src={post.thumbnail} alt="Post Thumbnail"/>
                    </div>
                      <h5>{post.title}</h5>
                  </div>
                  <div className="dashboard_post_actions">
                    <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
                    <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
                    <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
                  </div>
                </article>
              })
            
            }
        </div> : <h2>NO POSTS AVAILABLE</h2>
      }
    </section>
  )
}

export default Dashboard