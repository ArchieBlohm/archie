import React from 'react'

export default function FooterW() {
    const currentYear = new Date().getFullYear()
  return (
    <>
    <div className='footmainw'>
      <div className='footerW'>
        BOBBY SAUNDERS {currentYear}
      </div>
      <div className='rightFooterW'>
        @bobbysaunders   Copyright ©
      </div>
    </div>
    </>
  )
}