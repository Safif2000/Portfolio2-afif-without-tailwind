"use client";
import AboutMe from '../components/Aboutme';
import Projects from '../components/Projects';

import Contact from '../components/Contact';

import Navbar from '@/components/Navbar';
import Herosection from '@/components/Herosection';
import './styles/navbar.module.css';
import './styles/Herosection.module.css';
const Home = () => {
  return (
    <div>
 
    <Navbar/>
     <Herosection/>
        <AboutMe />
        <Projects />
        {/* <Skills /> */}
        <Contact />
       
      
    </div>
  );
};

export default Home;
