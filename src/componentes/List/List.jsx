import trash from "../../assets/caixa.png";
import check from "../../assets/check.png";
import square from "../../assets/square.png"
import "./List.css";

function DoneImg(props) {

  if (props.done) {
    return (<img src={check} alt="check" width={20} />)
  } else {
    return (<img src={square} alt="square" width={20} />)
  }

}

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li className={item.done?"done item":"item"} key={item.id}>
          {item.text}

          <div>
            <button onClick={() => {props.onDone(item)}}>
              <DoneImg done={item.done}/>
            </button>
            <button
              onClick={() => {
                props.onItemDeleted(item);
              }}
            >
              <img src={trash} alt="trash" width={20} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
