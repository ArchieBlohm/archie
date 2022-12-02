import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function RightnavW() {

  const handlerMouseOver = () => {
      const element = document.getElementsByClassName('dropdown');
      // console.log(element[0].style.visibility);
      element[0].style.visibility = "visible"
  }

  const handlerMouseLeave = () => {
    const element = document.getElementsByClassName('dropdown');
    // console.log(element[0].style.visibility);
    element[0].style.visibility = "hidden"
}

// let navigate = useNavigate()
// const gotopage = () => {
// navigate('/photography')
// }
  return (
    <div className='rightsideW'>
      <ul>
		    <li className="drop"><Link onMouseOver={handlerMouseOver} to="#">Folio</Link> 
          <ul className="dropdown" onMouseLeave={handlerMouseLeave}>
              <li><Link to="/photography">Photography</Link></li>
              <li><Link to="/PhotoshootStyling">Photoshoot Styling</Link></li>
              <li><Link to="/WebDesign">Web & Digital design</Link></li>
              <li><Link to="/PrintDesign">Print design</Link></li>
            </ul>
          </li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/contact">Contact</Link> </li>
	    </ul>
      
      {/* <a href="/contact"><button className="button-solidW">Contact</button></a>
      <a href="/about"><button className="button-solidW">About</button></a>
      <a href="/folio"><button className="button-solidW">Folio</button></a> */}
    </div>
  )
}

export default RightnavW 