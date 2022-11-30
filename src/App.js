import logo from './logo.svg';
import './App.css';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import Leftnav from './components/Leftnav';
import Rightnav from './components/Rightnav';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Photography from './components/Photography.jsx'
// import PhotoshootStyling from './components/PhotoshootStyling.jsx'
// import PrintDesign from './components/PrintDesign'
// import WebDesign from './components/WebDesign'
import Display from './components/Display';
// import Carousel from './components/Carousel';


function App() {
  return ( 
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          {/* <Route path='home' element={<Home/>}/>
          <Route path='photography' element={<Photography/>}/>
          <Route path='photoshootstyling' element={<PhotoshootStyling/>}/>
          <Route path='printdesign' element={<PrintDesign/>}/>
          <Route path='webdesign' element={<WebDesign/>}/> */}
        </Route>
          <Route path='/photography' element={<Display category_id="1"/>}/>
          <Route path='/photoshootstyling' element={<Display category_id="3"/>}/>
          <Route path='/printdesign' element={<Display category_id="4"/>}/>
          <Route path='/webdesign' element={<Display category_id="2"/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
 }

export default App;