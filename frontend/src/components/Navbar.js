import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav>
      <Link to="/"><img id="logo" src={require("../assets/images/logoplaceholder.png")} alt="Project Motel Logo"/></Link>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/rooms-and-rates'>ROOMS AND RATES</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/contact-us'>CONTACT</Link></li>
      </ul>
      <button id="nav-booking"><Link to=''>BOOK NOW</Link></button>
    </nav>
  )
}
