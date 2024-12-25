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
//Bro do not change thissss
const Part = (props)=> {
  return (
  <>
  <p> Part: {props.part} </p>
  <p> Exercise: {props.exercise} </p>
  </>
  )
  }


//The content should not  render anything, instead it will be handled by the Part component
const Content = (props) => {
  console.log(props.content)
  return (
  <div>
  <Part part= {props.content[0].part} exercise={props.content[0].exercise} />
  <Part part= {props.content[1].part} exercise={props.content[1].exercise} />
  <Part part= {props.content[2].part} exercise={props.content[2].exercise} />
  </div>
  )
  }

const Total = (props) => {

  const total = props.exercise_values[0].exercise + props.exercise_values[1].exercise +  props.exercise_values[2].exercise
  return (
  <p> Number of exercises: {total}</p>
  )

}
function App() {
  const course = 'Half stack development with React'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Passing data using props'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content_data = [
//directly pass variables and dont wrap them in an object 
{part: part1, exercise:exercises1},
{part: part2, exercise:exercises2},
{part: part3, exercise:exercises3},
]


  return (
 <div>
  <Header course={course}/>
  <Content content = {content_data}/>
  <Total exercise_values= {content_data} />


 </div> 
)
}


export default App
