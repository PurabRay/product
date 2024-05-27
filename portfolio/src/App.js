// import React from 'react';

import Services from './services';
import Whoiam from './whoiam';
import Education from './education';
import Projects from './projects'
import Experience from './experience';
import Blog from './blog'
import Homepage from './homepage';
import "./App.css"

function App() {
  return (
    
   
     <div class="container">
      <Homepage />
      <Whoiam />
      <Education />
      <Projects />
      <Experience />
      <Services />
      <Blog />
      </div>
    
  );
}

export default App;
