import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <>
    <div className="footmain">
      <div className='footer'>
        BOBBY SAUNDERS {currentYear}
      </div>
      <div className='rightFooter'>
        @bobbysaunders   Copyright ©
      </div>
    </div>
  
    </>
  )
}