import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import Button from './components/Button'
import TitleAndSub from './components/TitleAndSub'

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  function loadJoke(){
    console.log('carica joke')
  }

  function loadJoke(){
    console.log('carica joke')
  }

  return (
    <div className="App">
      <TitleAndSub /> 
      {/* <Button 
      
      content="Ciao"
      variant="Normal"
      
      />
      <Button 
      
      content="Ciao"
      variant={joke === "" ? "disabled" : ""}
      /> */}
    </div>
  )
}

export default App
