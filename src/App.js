import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Education from './components/Education';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Container>
        <AboutMe />
        <Works/>
        <Projects/>
        <Education/>
        <Courses/>
      </Container>
      <Contact/>
    </div>
  );
}

export default App;
