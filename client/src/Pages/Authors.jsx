import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Avatar1 from '../assets/avatar1.jpg'
import Avatar2 from '../assets/avatar2.jpg'
import Avatar3 from '../assets/avatar3.jpg'
import Avatar4 from '../assets/avatar4.jpg'
import Avatar5 from '../assets/avatar5.jpg'


const authorsData =[
  {id:1, avatar: Avatar1, name: 'Lebo Smith', posts: 3},
  {id:2, avatar: Avatar2, name: 'James Doe', posts: 5},
  {id:3, avatar: Avatar3, name: 'Nana Addo', posts: 0},
  {id:4, avatar: Avatar4, name: 'Hajia Bintu', posts: 2},
  {id:5, avatar: Avatar5, name: 'Mpho Mahama', posts: 1},
]

const Authors = () => {

  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
     { authors.length > 0 ? <div className="container authors_container">
          {
            authors.map(({id, avatar, name, posts}) => {
              return <Link key={id} to={`/posts/users/${id}`} className='author'>
                <div className="author_avatar">
                  <img src={avatar} alt={`${name}'s Avatar`} />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <small>{posts}</small>
                </div>
              </Link>
            })
          }
      </div> : <h2 className='center'>No Authors Found</h2>}
    </section>
  )
}

export default Authors