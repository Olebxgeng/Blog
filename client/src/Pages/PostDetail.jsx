import React from 'react'
import PostAuthor from "../Components/PostAuthor"
import { Link } from 'react-router-dom'
import Thumbnail from "../assets/blog8.jpg"

const PostDetail = () => {
  return (
    <section className="post_detail">
      <div className="container post_detail_container">
        <div className="post_detail_header">
          <PostAuthor/>
          <div className="post_detail_buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post_detail_thumbnail">
          <img src={Thumbnail} alt='Post Thumbnail'/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus dolore distinctio, perferendis tenetur voluptatibus iusto tempora explicabo, quaerat nisi quod, veniam numquam dolores rem officia! 
          Explicabo ducimus ullam autem quo nam ipsam voluptatem. Fugit ea accusamus iure impedit magnam consequuntur atque eius ab porro voluptates quaerat minima ullam tempora ex alias consequatur delectus facere quas quisquam, est reiciendis quam qui distinctio perferendis. 
          Cupiditate illum quae beatae porro quia quos dignissimos saepe consectetur mollitia sed, illo praesentium neque magnam iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt architecto aliquid eum necessitatibus in delectus blanditiis quod numquam, vero quam ex cupiditate, inventore sequi quibusdam rerum dolor hic doloremque dignissimos. 
          Doloremque provident, nam repudiandae reiciendis dolor quo voluptatibus odit odio ratione quod atque nisi itaque tempora exercitationem voluptates perferendis doloribus ex ea perspiciatis praesentium adipisci consectetur dolorum esse! Fugit molestias vitae praesentium placeat dolor, non, illo asperiores quasi esse quis, hic quos blanditiis ea optio ducimus. 
          Aliquam aspernatur architecto consequuntur! Vitae illum ea libero eveniet molestias? Iure eaque corporis tenetur quidem saepe aliquam quos. Consequuntur eum ad voluptate amet!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium quos eligendi maiores? Quis quas fugit tenetur reprehenderit, aut incidunt quibusdam fugiat consectetur architecto cumque. 
          Dolores laborum magni alias, sed a dignissimos maxime error quibusdam beatae, harum perspiciatis voluptates. Amet, voluptates nemo illum corporis excepturi omnis, iusto consequatur ex veniam ad maiores doloremque totam architecto rem? Ducimus, ullam. 
          Commodi, laudantium. Eum sequi ducimus ipsum unde odit doloribus nihil nemo corrupti hic, repellat laudantium quisquam quibusdam sint commodi adipisci incidunt, enim optio perspiciatis numquam laborum et omnis! Doloremque tempora placeat atque hic earum totam laudantium veniam magnam suscipit culpa, 
          iste vel perferendis repudiandae modi eius itaque expedita deserunt nihil repellat adipisci voluptatem delectus necessitatibus. Ducimus reiciendis tenetur laboriosam ad non a voluptatibus dicta assumenda cupiditate voluptas, vel explicabo quidem iure, perferendis repellat vitae. Natus commodi pariatur incidunt nostrum doloremque sit neque nulla consectetur, exercitationem temporibus. Veniam aperiam voluptate tempore error esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus dolore distinctio, perferendis tenetur voluptatibus iusto tempora explicabo, quaerat nisi quod, veniam numquam dolores rem officia! 
          Explicabo ducimus ullam autem quo nam ipsam voluptatem. Fugit ea accusamus iure impedit magnam consequuntur atque eius ab porro voluptates quaerat minima ullam tempora ex alias consequatur delectus facere quas quisquam, est reiciendis quam qui distinctio perferendis. 
          Cupiditate illum quae beatae porro quia quos dignissimos saepe consectetur mollitia sed, illo praesentium neque magnam iste.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium quos eligendi maiores? Quis quas fugit tenetur reprehenderit, aut incidunt quibusdam fugiat consectetur architecto cumque. 
          Dolores laborum magni alias, sed a dignissimos maxime error quibusdam beatae, harum perspiciatis voluptates. Amet, voluptates nemo illum corporis excepturi omnis, iusto consequatur ex veniam ad maiores doloremque totam architecto rem? Ducimus, ullam. 
          Commodi, laudantium. 
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, est commodi? Delectus dicta facere repellat, rem quas earum accusantium veritatis.</p>
      </div>

    </section>
  )
}

export default PostDetail