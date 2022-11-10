import { useState } from "react";
import Card from "../Card/Card";

function Modal(props) {
  return (
    <div
      id="modal"
      onClick={props.onHideModal}
      className={props.show ? "modal" : "modal hide"}
    >
      <Card className="cardmodal">{props.children}</Card>
    </div>
  );
}

export default Modal;
