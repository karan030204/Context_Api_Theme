import React, { useContext } from 'react'
import { NewContext } from '../MyContext'

const Landing = () => {
    const {theme,setTheme} = useContext(NewContext)
  return (
    <>
        <div className={`landing_wrapper ${theme}`} >
            <div className='left-text'>
                Colour Will Change on Clicking button
            </div>
            <div className={`right-btn ${theme}`}>
                <button onClick={()=>{ theme === 'light' ? setTheme('dark') : setTheme('light')}}>Change Button</button>
            </div>

        </div>
    </>
  )
}

export default Landing