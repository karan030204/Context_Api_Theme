import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const MyComponent = () => {
    const {text} = useContext(MyContext)
  return (
    <>
        <div>
            <h1>{text}</h1>
            <button>
                Click me
            </button>
        </div>
    </>
  )
}

export default MyComponent