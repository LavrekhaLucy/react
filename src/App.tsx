import './App.css'
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";




function App() {

    const [themeColor, setThemeColor] = useState<string>('light')
  return (
    <div >
        <MyContext.Provider value={{
            theme:themeColor,
            changeTheme:(themeValue:string) =>{
                setThemeColor(themeValue)
            }
        }}>

            <A/>
            <B/>

        </MyContext.Provider>

    </div>
  )
}

export default App
