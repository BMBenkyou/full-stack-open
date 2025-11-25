import { useState } from 'react'

// const Display = (props) => {
//     return (
//       <div>{props.counter}</div>
//     )
// }
// const Button = (props) => {
//     return (
//       <button onClick = {props.onClick}>
//         {props.text}
//       </button>
//     )

// }
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   console.log('rendering with counter value', counter)


//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }
//   const descreaseByOne = () => {
//     console.log('deccreasing, value before', counter)
//     setCounter(counter - 1)
  
//   }
//   const setToZero= () => { 
//     console.log('increasing, value before', counter)
//     setCounter(0)
//   }
  




//   // const handleClick = () => {
//   //   console.log ('Button clicked')
//   //   // setCounter(counter+1)
//   // }
//   // setTimeout(
//   //   () => setCounter(counter + 1),
//   //   1000
//   // )

//   return (
//     <div>
//     <Display counter = {counter}/>
//     <button onClick = {increaseByOne} text = "increase by one "> + 1</button>
//     <button onClick = {descreaseByOne} text = "decrease by one "> - 1</button>
//     <button onClick = {setToZero} text = "set to Zero"> 0 </button>
//     </div>
//   )
// }

// export default App



// handling complex states

  const History = (props) => {
    if (props.allClicks.length == 0) {
      return (
        <div>
          used by pressing the buttons 
        </div>
      )
    }
    return (
      <div>
        button press histor: {props.allClicks.join('')}
      </div>
    )

  }
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [total,setTotal] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    setLeft(left + 1)
    console.log('left after', left)
    setTotal(left + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    console.log('left after', left)
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks}/>
      <p>{allClicks.join(' ')}</p>
      <p>total {total} </p>
    </div>
  )
}

export default App