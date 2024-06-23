import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Header from './Components/Header.jsx';
import Feature from './Components/Feature.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
