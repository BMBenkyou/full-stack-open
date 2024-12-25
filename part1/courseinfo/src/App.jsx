import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//define 3 components (Header (takes in course) ,Content, Total)

const Header= (props) => {
  return(
    <h1> {props.course}</h1>
  )
  }

// const Content = (props) => {
//   return (
//   <>
//   <p> Part: {props.part} </p>
//   <p> Exercise: {props.exercise} </p>
//   </>
//   )
//   }

// const Total = (props) => {
//   return (


//   )

// }
function App() {
  const course = 'Half stack development with React'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Passing data using props'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  

  return (
 <div>
  <Header course={course}/>
 </div> 
)
}


export default App
