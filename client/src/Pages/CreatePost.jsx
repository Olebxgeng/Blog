import React, { useState } from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Uncategorised")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")

  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': "ordered"}, {'list': "bullet"}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  
  
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 
    'list', 'bullet', 'indent', 
    'link', 'image', 
  ]

  const Post_Categories = ["Agriculture", "Business",  "Education",  "Entertainment",  "Art",  "Investments",  "Uncategorised",  "Weather", ]

  return (
    <section className="create_post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form_error_message">
          THIS IS AN ERROR MESSAGE
        </p>
        <form action="" className="form create_post_form">
          <input type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} autoFocus/>
          <select name='category' value={category} onChange={e=> setCategory(e.target.value)}>
            {
                Post_Categories.map(category => <option key={category}>{category}</option>)
            }
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} className='ql_editor'/>
          <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
          <button type='submit' className="btn primary">Create Post</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost