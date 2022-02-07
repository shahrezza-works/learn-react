import React from "react"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import datacard from "./data";

function App() {

  const cardElement = datacard.map(data => {
    return <Card key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      country={data.location}
      title={data.title}
      price={data.price}
    />
  })

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className='card--collection'>
        {cardElement}
      </section>
    </div>
  );
}

export default App;
