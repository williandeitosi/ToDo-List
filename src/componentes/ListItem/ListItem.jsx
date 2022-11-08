import trash from "../../assets/caixa.png";
import check from "../../assets/check.png";
import square from "../../assets/square.png";
import Card from "../Card/Card";

function DoneImg(props) {
  if (props.done) {
    return <img src={check} alt="check" width={20} />;
  } else {
    return <img src={square} alt="square" width={20} />;
  }
}

function ListItem(props) {
  return (
    <li key={item.id}>
      <Card className={item.done ? "done item" : "item"}>
        {item.text}

        <div>
          <button
            onClick={() => {
              props.onDone(item);
            }}
          >
            <DoneImg done={item.done} />
          </button>
          <button
            onClick={() => {
              props.onItemDeleted(item);
            }}
          >
            <img src={trash} alt="trash" width={20} />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
