import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

  return (
    <footer>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/rooms-and-rates'><li>Rooms And Rates</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact Us</li></Link>
      </ul>
    </footer>
  )
}
