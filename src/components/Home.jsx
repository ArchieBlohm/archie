import React, { useRef, useState } from 'react'
import Carousel from './Carousel';
import {motion} from 'framer-motion'
import images from '../Images'
import { Outlet } from 'react-router-dom';
import LeftnavW from './LeftnavW';
import RightnavW from './RightnavW';
import FooterW from './FooterW';

function Home() {
  return (
    <div className="homewrap">
    <LeftnavW/>
    <RightnavW/>
      <div className="Homeimage"></div>
    <FooterW/>
    
    </div>

      
    
    
  )
}

export default Home