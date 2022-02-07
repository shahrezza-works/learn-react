import React from "react"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className='card--collection'>
        <Card 
          img="card1.png"
          rating="5.0"
          reviewCount={10}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card 
          img="card2.png"
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
      </div>
    </div>
  );
}

export default App;
