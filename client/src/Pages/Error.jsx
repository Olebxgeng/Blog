import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Error = () => {
  return (
    <>
        <Header/>
        <section className='error_page'> 
          <div className="center">
              <Link to="/" className='btn primary'>Go Back Home</Link>
              <h2>Not Found</h2>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Error