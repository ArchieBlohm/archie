import React, { useState } from 'react'
import Leftnav from './Leftnav'
import Rightnav from './Rightnav'
import Footer from './Footer';


function About() {
const [showText1, setShowText1] = useState(false);
const [showText2, setShowText2] = useState(false);
const [showText3, setShowText3] = useState(false);
const [showText4, setShowText4] = useState(false);
const [showText5, setShowText5] = useState(false);
// const onClick = () => setShowText(true);


const Text1 = () => 
<div className='text'>
  <h2>
    B Media, Auckland
  </h2>
  <h3>
    Jan 2018 - July 2018
  </h3>
  <p>
    B Media, Auckland  Jan 2018 - July 2018
    At B Media I had the role of junior graphic designer 
    and was responsible for the design of all advertising
    for House of The Year for both online and print. And
    as with any junior position I was in charge of making a good cup of tea!
  </p>
</div>;

const Text2 = () => 
  <div className='text'>
    <h2>
      Bauer Media, Auckland
    </h2>
    <h3>
      July 2018 - April 2020
    </h3>
    <p>
      As Graphic designer I was responsible for the design of both NEXT
      and Good Health magazines, in addition to this, I was tasked with
      creating all digital assets including EDM's and web banners, 
      marketing, social media, art directing still life fashion and
      beauty shoots, producing all real-life shoots which included
      briefing photographers, stylists and hair and makeup artists.
      I was also given the task on occasion of sending the magazines
      to the printers. On a day-to-day basis, I liaised with the
      Creative Director,advertising, marketing, and digital teams
      on all aspects of each brand's direction and design. 
    </p>
  </div>;

const Text3 = () => 
  <div className='text'>
    <h2>
      ARE Media, Auckland
    </h2>
    <h3>
      July 2020 - December 2020
    </h3>
    <p>
      Creating digital and print design for Air New Zealand in-flight
      magazine and homes title your home and garden creating all
      digital assets including EDM's and web banners, marketing,
      social media.
    </p>
  </div>;

const Text4 = () => 
  <div className='text'>
    <h2>
      March 2021 - February 2022
    </h2>
    <h3> 
      March 2021 - February 2022
    </h3>
    <p>
      As Art Director I have sole responsibility for the design 
      and art direction of the magazine, on top of this role, I
      am involved with many ICG internal and custom projects, 
      including web mockups, branding, directing photoshoots, 
      and creating visual content for client pitches.
    </p>
  </div>;

const Text5 = () => 
  <div className='text'>
    <h2>
      Freelance Designer 
    </h2>
    <h3>
      December 2020 - Current 
    </h3>
    <p>
      I have been a freelance designer between my full-time work
      and study doing various projects and work such as my 
      latest work; Dish magazine.
    </p>

    <h2>
      Whitecliffe - Diploma in Web development 
    </h2>
    <h3>
      February 2022 - December 2022 
    </h3>
    <p>
      Through my studies, we complete multiple coding and design tasks 
      and assignments in languages such as python, C#, HTML, CSS, and 
      Basic Javascript. I also created reactive wireframes and mockups 
      in Figma to create and plan my projects.
    </p>
  </div>;


  return (
    <>
    <div className="otherpages">
      <Leftnav/>
      <Rightnav/>
      <div className="carousel2">
        <div>
          <button onClick={() => setShowText1(!showText1)} >JUNIOR DESIGNER <img src="./Dropdown fat.png"/></button>
          {/* <Text1 /> */}
          {showText1 ? <Text1 /> : null}
        </div>

        <div>
          <button onClick={() => setShowText2(!showText2)}>GRAPHIC DESIGNER <img src="./Dropdown fat.png"/></button>
          {showText2 ? <Text2 /> : null}
        </div>

        <div>
          <button onClick={() => setShowText3(!showText3)}>GRAPHIC DESIGNER <img src="./Dropdown fat.png"/></button>
          {showText3 ? <Text3 /> : null}
        </div>

        <div>
          <button onClick={() => setShowText4(!showText4)}>CREATIVE DESIGNER/ART DIRECTOR <img src="./Dropdown fat.png"/></button>
          {showText4 ? <Text4 /> : null}
        </div>

        <div>
          <button onClick={() => setShowText5(!showText5)}>FREELANCE DESIGNER/UNIVERSITY STUDIES <img src="./Dropdown fat.png"/></button>
          {showText5 ? <Text5 /> : null}
        </div>
 
      </div>
      
      
      <Footer/>
      
    </div>
    </>
  )
}

export default About