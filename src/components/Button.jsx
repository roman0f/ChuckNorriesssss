import '../styles/button.css'

function Button({content, variant, clbk, style}) {
    function rendeClasses(){
        let classes = [
        'Button', 'text-center', variant, style
        ]

        return classes.join(" ")
    }
  return (
    <div className="buttons">
        <button className={rendeClasses()} content={content}>{content}</button>
    </div>
  )
}

export default Button