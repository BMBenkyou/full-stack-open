import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

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
    <div>{counter}</div>
    <button onClick = {() => setCounter(counter+1)}> Click to increment</button>
    </div>
  )
}

export default App