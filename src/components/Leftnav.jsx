import React from 'react'
import { Link } from 'react-router-dom'

export default function Leftnav() {
  return (
    <div className='leftside'>
      <Link to="/"><button className="button-solidW">Bobby Saunders</button></Link>
    </div>
  )
}
