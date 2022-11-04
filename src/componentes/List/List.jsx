import trash from "../../assets/caixa.png";
import "./List.css";

function List(props) {



  function deleteItem (item) {
    console.log(item)
  }


 
  return (
    <ul>
      {props.items.map(item => 
        <li key={item.id}>{item.text}

          <button onClick={() => {props.onItemDeleted(item)}}>
            <img src={trash} alt="trash" width={20} />
          </button>
        </li>
      )}
    </ul>
  );
}

export default List;
