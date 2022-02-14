import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

export default function App() {
    const [themeMode, setThemeMode] = React.useState("dark")

    function triggerMode()
    {
        
        setThemeMode(function(prevMode){
            return prevMode === "dark" ? "light" : "dark"
        })
        
    }

    return (
        <div>
            <Navbar theme={themeMode} handleClick={triggerMode}/>
            <Main theme={themeMode}/>
        </div>
    )
}
