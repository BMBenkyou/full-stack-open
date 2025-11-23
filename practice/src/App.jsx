import { useState } from 'react'

const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
}
const Button = (props) => {
    return (
      <button onClick = {props.onClick}>
        {props.text}
      </button>
    )

}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const descreaseByOne = () => setCounter(counter - 1)
  const setToZero= () => setCounter(0)





  // const handleClick = () => {
  //   console.log ('Button clicked')
  //   // setCounter(counter+1)
  // }
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return (
    <div>
    <Display counter = {counter}/>
    <button onClick = {increaseByOne} text = "increase by one "> + 1</button>
    <button onClick = {descreaseByOne} text = "decrease by one "> - 1</button>
    <button onClick = {setToZero} text = "set to Zero"> 0 </button>
    </div>
  )
}

export default App