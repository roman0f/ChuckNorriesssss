import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import Button from './components/Button'
import TitleAndSub from './components/TitleAndSub'
import chuckimg from './assets/chuck.png'
import DropDown from './components/Dropdown'
function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")
  const [category,loadcategory] = useState([])


  function loadJoke(){
    
    fetch('https://api.chucknorris.io/jokes/random').then(
      response => response.json()
    ).then(
      data => {
        setJoke(data.value);
      }
    )


    
  }

  return (
    <div className="App">
      <TitleAndSub/> 
      
      <div className="imageChuck">
        <img src={chuckimg} alt="ChuckNorriesPotentissimo"/>
      </div>

      <DropDown/>
      
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
