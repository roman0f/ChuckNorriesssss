import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import Button from './components/Button'
import TitleAndSub from './components/TitleAndSub'
import chuckimg from './assets/chuck.png'
import DropDown from './components/Dropdown'
import Joke from './components/Joke'
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
    if(selection===""){
      fetch('https://api.chucknorris.io/jokes/random').then(
      response => response.json()
    ).then(
      data => {
        setJoke(data.value);
      }
    )

    }else{
      fetch(`https://api.chucknorris.io/jokes/random?category=${selection}`).then(
        response => response.json()
      ).then(
        data => {
          setJoke(data.value);
        }
      )

    }
    


    
  }

  function categoryhandler(e){
    setselection(e)

  }

  function copy(){
    if(joke != ""){
      navigator.clipboard.writeText(joke)
      alert("Testo copiato negli appunti con successo!(come io ho copiato la funzione da internet)")
    }
  }


  return (
    <div className="App">
      <TitleAndSub/> 
      
      <div className="imageChuck">
        <img src={chuckimg} alt="ChuckNorriesPotentissimo"/>
      </div>
      <DropDown category={category} clbk={loadcategory} handler={categoryhandler}/>

      {joke != "" &&
      
      <Joke joke={joke} />
      }

      
       <Button 
      
      content="CARICA JOKE"
      variant="Normal"
      style="spacebtn"
      clbk={() => loadJoke()}
      />
      <Button 
      content="COPIA TESTO"
      variant={joke === "" ? "disabled" : ""}
      style="maringsott"
      clbk ={copy}
      /> 
    </div>
  )
}

export default App
