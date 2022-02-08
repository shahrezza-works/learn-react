import React from "react";
import Navbar from "./Components/Navbar";
import Story from "./Components/Story";
import dataJournal from "./data"

function App() {
  const dataJournals = dataJournal.map(function(journal){
    console.log(journal)
    return <Story 
      key={journal.key}
      {...journal}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className="story--container">
        {dataJournals}
      </div>
      
    </div>
  );
}

export default App;
