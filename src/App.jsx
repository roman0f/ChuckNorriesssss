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
  const [category,setcategory] = useState([])
  const [selection,setselection] = useState("")
  

  function loadcategory(){
    if(category.length === 0){
      fetch("https://api.chucknorris.io/jokes/categories").then(
      response => response.json()
    ).then(
      data=>{
        let obj = data.map(function(item, index){
          return {
            id: index,
            value: item,
            label: item.charAt(0).toUpperCase() + item.slice(1)
          }
        })
        setcategory(obj)
      }
    )
    }
  }

  function loadJoke(){
    
    fetch('https://api.chucknorris.io/jokes/random').then(
      response => response.json()
    ).then(
      data => {
        setJoke(data.value);
      }
    )


    
  }

  console.log(category)

  return (
    <div className="App">
      <TitleAndSub/> 
      
      <div className="imageChuck">
        <img src={chuckimg} alt="ChuckNorriesPotentissimo"/>
      </div>
      <DropDown category={category} clbk={loadcategory} />


      
       <Button 
      
      content="CARICA JOKE"
      variant="Normal"
      style="spacebtn"
      />
      <Button 
      content="COPIA TESTO"
      variant={joke === "" ? "disabled" : ""}
      /> 
    </div>
  )
}

export default App
