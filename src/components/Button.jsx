import '../styles/Button.css'

function Button({content, variant, clbk}) {
    function rendeClasses(){
        let classes = [
        'Button', 'text-center', 'd-flex', variant
        ]

        return classes.join(" ")
    }
  return (
    <div className="App">
        <button className={rendeClasses()} content={content}></button>
    </div>
  )
}

export default Button
