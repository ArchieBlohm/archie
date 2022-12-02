import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


export default function LeftnavW() {
  return (
    <motion.div className='leftsideW'>
      <Link to="/"><button className="button-solidW">Bobby Saunders</button></Link>
    </motion.div>
  )
}
