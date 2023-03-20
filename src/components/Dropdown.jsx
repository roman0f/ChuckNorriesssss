import { useEffect } from 'react';
import '../styles/DropDown.css'

function DropDown({category, clbk, handler}) {

  useEffect(clbk, [])

  function renderClasses(){
    let classes = ['Button',variant];
    return classes.join(" ")
  }

  function handleChange(e){
    if(handler!= undefined){
      handler(e.currentTarget.value)
    }
    
  }

  return (
    <div className="DropDown">
       <select name="categories" id="categorisid" onChange={handleChange}>
        <option value="" hidden >"Scegli una opzione"</option>
        {category.map((category) => 
        <option key={category.id} value={category.value}>{category.label}</option>
        )}
        
        
       </select>
    </div>
  )
}

export default DropDown
