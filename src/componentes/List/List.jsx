

function List(props) {
    return(<ul>
      {props.items.map(items => <li>{items}</li>)}
    </ul>)
  
  }

  export default List