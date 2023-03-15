import { useEffect } from 'react';
import '../styles/DropDown.css'

function DropDown({category, clbk}) {

  useEffect(clbk, [])

  function renderClasses(){
    let classes = ['Button',variant];
    return classes.join(" ")
  }

  return (
    <div className="DropDown">
       <select name="categories" id="categorisid">
        <option value="">"Scegli una opzione"</option>
        {category.map((category) => 
        <option key={category.id} value={category.value}>{category.label}</option>
        )}
        
        
       </select>
    </div>
  )
}

export default DropDown
