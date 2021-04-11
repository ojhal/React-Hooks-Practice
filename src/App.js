import React from 'react'


const IncNum = () => {
  console.log('clicked');
}


const App = () => {
  return (
    <>
      <h1> 0</h1>
      <button onClick={IncNum}> Click Me</button>
    </>
  )
}

export default App;
