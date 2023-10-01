import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Landing from './Components/Landing';
import Counter from './Counter';
import MyComponent from './MyComponent';
import { MyContext, NewContext } from './MyContext';

function App() {
  // const [text,setText] = useState("");
  // const [color, setColor] = useState("")
  const [theme,setTheme] = useState("dark")
  return (
    <div className="App">
      {/* <MyContext.Provider value={{text, setText}} >
        <NewContext.Provider value={{color,setColor}}>
          <MyComponent/>
          <Landing />
        </NewContext.Provider>
      </MyContext.Provider> */}

      {/* <NewContext.Provider value={{theme,setTheme}}>
        <About/>
        <Landing />

      </NewContext.Provider> */}

        <Counter/>
    </div>
  );
}

export default App;
