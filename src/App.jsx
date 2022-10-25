import { useState } from 'react'
import './App.css'
import Form from './componentes/Form/form'
import List from './componentes/List/List'

function App() {

  const [items,setItems] = useState([])


 function onAddItem(item) {
  setItems([...items, item])

 }

  return ( 
    <div className='container'>
      <h1>ToDo</h1>
      
      <Form onAddItem={onAddItem}></Form>

      <List items={items}></List>

    </div>
  )
}



export default App
