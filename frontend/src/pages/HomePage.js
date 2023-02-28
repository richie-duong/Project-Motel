import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage-banner'>
        <h1>PROJECT MOTEL</h1>
        <h2>THE BEST MOTEL OF NOVA SCOTIA</h2>
        <Link to='/'><button>Book A Room</button></Link>
      </div>
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <p>For more than 40 years, the Motel Royal, located in the beautiful Bas-Saint-Laurent region, has been offering you comfortable lodging and unbeatable service at affordable rates. Surrender to charms of the exceptional view the Motel Royal offers of Lake Témiscouata. Just across the lake stands la montagne du Fourneau (Fourneau hill), situated in the Parc National du Lac-Témiscouata. Admire the magnificent sunsets from your balcony.

      Fans of water sports, bike rides, snowmobile or ATV, all roads lead to the Motel Royal. Its closeness to the marina and trails of all kinds provides easy access to our establishment. A two minute walk will lead you to the municipal beach where you can enjoy a refreshing swim.</p>
      
    </div>
  )
}
