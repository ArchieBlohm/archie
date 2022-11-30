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
		    <li className="drop"><a onMouseOver={handlerMouseOver}  href="#">Folio</a> 
          <ul className="dropdown" onMouseLeave={handlerMouseLeave}>
              <li><a  href="/photography">Photography</a></li>
              <li><a  href="/PhotoshootStyling">Photoshoot Styling</a></li>
              <li><a  href="/WebDesign">Web & Digital design</a></li>
              <li><a  href="/PrintDesign">Print design</a></li>
            </ul>
          </li>
        <li><a href="/about">About</a> </li>
        <li><a href="/contact">Contact</a> </li>
	    </ul>
      
      {/* <a href="/contact"><button className="button-solidW">Contact</button></a>
      <a href="/about"><button className="button-solidW">About</button></a>
      <a href="/folio"><button className="button-solidW">Folio</button></a> */}
    </div>
  )
}

export default RightnavW 