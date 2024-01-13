import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)

  const closeNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(false)
    } else{
      setIsNavShowing(true)
    }
  }

  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='nav_logo' onClick={closeNavHandler}>
                <img src={Logo} alt='Logo' />
            </Link>
            {isNavShowing && <ul className="nav_menu">
                <li><Link to="/profile/gfvgugj" onClick={closeNavHandler}>Profile</Link></li>
                <li><Link to="/CreatePost" onClick={closeNavHandler}>Create Post</Link></li>
                <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
            </ul>}
            <button className="nav_toggle_btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                   {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
            </button>
        </div>
    </nav>
  )
}

export default Header