import React, { useContext } from 'react'
import { NewContext } from '../MyContext'

const About = () => {
    const {theme,setTheme} = useContext(NewContext)
  return (

    <div className={`about ${theme}`}>About</div>
  )
}

export default About