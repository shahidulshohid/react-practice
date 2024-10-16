
import Counter from './Counter'
import './App.css'

function App() {
  const handleClick = () => {
    alert('Button clicked')
  }
  const handleClick2 = () => {
    alert('Button clicked 2')
  }
  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React core concepts 2</h2>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=> {alert('third clicked')}}>Third</button>
      <button onClick={()=> {addToFive(5)}}>AddToFive</button>
    </>
  )
}

export default App
