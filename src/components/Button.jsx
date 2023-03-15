import '../styles/Button.css'

function Button({content, variant, clbk}) {
    function rendeClasses(){
        let classes = [
        'Button', 'text-center', variant
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
