import './App.css'

import Team from './counter'

import Users from './user'

import Friends from './friends'

function App() {

  function handleClick () {
      alert('invalid')
  }
  const buttonClick = () => {
    alert('button click 2')
  }

  const onFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <button onClick={handleClick}>click me</button>
      <button onClick={buttonClick}>click</button>
      <button onClick={() => {
        alert('its working.......')
      }}>four</button>
      <button onClick={() => onFive(2)}>click me</button>
    </>
  )
}

export default App
