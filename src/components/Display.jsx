import React from 'react'
import Carousel from './Carousel';
import {motion} from 'framer-motion'
import images from '../Images'
import { Outlet } from 'react-router-dom';
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
import Footer from './Footer';


export default function Display(props) {
const category_id = props.category_id; 
  return (
    <>
    <Leftnav/>
    <Rightnav/>
    <Carousel category_id={category_id}/>
    <Footer/>
    </>
 )
}
  