import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Landing from './Components/Landing';
import Use_ref from './Components/Use_ref';
import Counter from './Counter';
import LoginUseState from './Form_reducer/LoginUseState';
import MyComponent from './MyComponent';
import { MyContext, NewContext } from './MyContext';
import Redux_lesson from './Redux_old/Redux_lesson';

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

        {/* <Counter/> */}


        {/* <Use_ref /> */}

{/* <Redux_lesson/> */}

      <LoginUseState />
        
    </div>
  );
}

export default App;
