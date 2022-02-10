import React from "react"
import Box from "./Components/Box"
import boxesdata from "./boxes"

function App() {

  const[boxes, setBoxes] = React.useState(boxesdata)

  function handleToggle(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.map(item => {
        return item.id === id ? {...item, on:!item.on} : item
      })
    })
  }

  const box = boxes.map(boxes => {
    return <Box 
      key={boxes.id}
      status={boxes.on}
      handleToggle={()=>handleToggle(boxes.id)}
    />
  })

  return (
    <div className="App">
      {box}
    </div>
  );
}

export default App;
