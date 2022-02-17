import React from "react";
import Start from "./Components/Start";
import QuizSection from "./Components/QuizSection";

function App() {
  const [start, setStart] = React.useState(false)
  const [darkTheme, setDarkTheme] = React.useState(JSON.parse(localStorage.getItem('quizzical-dark-mode')) || false)

  function startQuiz() {
    setStart(true)
  }

  function darkMode() {
    localStorage.setItem('quizzical-dark-mode', !darkTheme)
    setDarkTheme(!darkTheme)
    loadThemeOnDOM(!darkTheme)
  }

  React.useEffect(()=> {
    if(localStorage.getItem('quizzical-dark-mode') !== null){
      setDarkTheme(JSON.parse(localStorage.getItem('quizzical-dark-mode')))
    }else{
      localStorage.setItem('quizzical-dark-mode', JSON.stringify(darkTheme))
    }
    loadThemeOnDOM(darkTheme)
  }, [])

  function loadThemeOnDOM(status) {
    const root = document.querySelector(':root');
    root.setAttribute('dark-theme', `${status}`);
  }

  function triggerPlayAgain() {
    setStart(false)
    console.log("yes click")
  }

  return (
    <div className="App">
      {start
      ?
      <QuizSection 
        startNow={start} 
        triggerPlayAgain={triggerPlayAgain} 
      
      />
      :
      <Start handleClick={startQuiz} changeThemeMode={darkMode} darkMode={darkTheme}/>
      }
    </div>
  );
}

export default App;
