import {useState} from 'react'
function Form(props) {

    const [text, setText] = useState("")
    
    function handleChange(event) {
        let t = event.target.value
        setText(t)
    }

    function addItem(event) {
        event.preventDefault()
        if (text) {
        props.onAddItem(text)
        setText("")
        }
    }

    return (<form action="">
        <input className='form' onChange={handleChange} type="text" value={text}/>
        <button className='add' onClick={addItem}>Add</button>
      </form>
    )

}

export default Form