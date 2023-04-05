import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import mail from "./mail.png";
import resume from "./resume.jpg";
import blog from "./blog.png";

const Navbar = () => {
  return (
    <div>
    <nav>
        
      <ul className="menu">
        
        <li>
          <Link to="/Homepage">John Green</Link>
        </li>
        <li>
          <Link to="/Contact"><img src={mail} alt="mail" width="30px" height="30px" /></Link>
        </li>
        <li>
          <Link to="/Resume"><img src={resume} alt="resume" width="30px" height="30px"/></Link>
        </li>
        <li>
        <Link to="/blog"><img src={blog} alt="blog" width="30px" height="30px"/></Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
