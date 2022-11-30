import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import images from '../Images'
import {pictures, categories} from '../data/content.js' 

function Carousel(props) {
  const[width, setwidth] = useState(0);
  const carousel2 = useRef();
  const category_id = props.category_id;
  const selected_pictures = pictures.filter(p => p.category_id == category_id);
  const category_name = categories[category_id-1].title;
  const root = './media/';
  
  selected_pictures.forEach(i => console.log(root + i.url));

  return (
    <div>
    <div className="carousel">
    
      <motion.div ref = {carousel2} className="carousel">
          <motion.div 
          drag ="x"  
          dragConstraints={{right:0, left:-9000}} 
         className="inner-carousel">
          <h1>{category_name}</h1>
           {selected_pictures.map( image => 
              // return(
                <motion.div className='item' key={"pic"+image.id}>
                 <img src={root + image.url} alt=""/>
               </motion.div>
            //  );
           )}
         </motion.div>
        </motion.div> 
    </div>
    </div>
  )
}

export default Carousel