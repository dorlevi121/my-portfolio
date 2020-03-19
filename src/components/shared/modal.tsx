import React from "react";
import modalStyle from "./modal.module.scss";
import { Link } from "react-router-dom";

interface OwnProps {
  title: string;
  children: React.ReactNode;
}
const Modal: React.FC<OwnProps> = props => {
  return (
    <div className={modalStyle.Modal}>
      <div className={modalStyle.Title}>
        <div>
          <h1>{props.title}</h1>
          <hr />
        </div>
        <div className={modalStyle.Close}>
          <Link to="/">&times;</Link>
        </div>
      </div>
      <div className={modalStyle.Content}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Modal;
