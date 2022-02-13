import React from "react";

function App() {
  const [swData,setSwData] = React.useState({})
  const [count, setCount] = React.useState(1)

  React.useEffect(()=>{
    console.log("effect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setSwData(data))
  }, [count])

  
  return (
    <div className="App">
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(swData, null, 2)}</pre>
    </div>
  );
}

export default App;
